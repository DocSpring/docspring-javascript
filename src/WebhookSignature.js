import crypto from 'crypto';

/**
 * Checks webhook requests' X-DocSpring-Signature header (https://docspring.com/docs/webhooks/verifying-signatures/).
 * @module WebhookSignature
 */

/**
 * The number of seconds a webhook request's signature stays valid (verifyWebhookSignature)
 * @type {Number}
 */
export const WEBHOOK_SIGNATURE_TOLERANCE = 300;

/**
 * Checks a webhook request's X-DocSpring-Signature header. Returns true when one of its v1 signatures is the
 * HMAC-SHA256 of "{t}.{payload}" with the webhook's secret, and its timestamp t is at most `tolerance` seconds from
 * `now`. Returns false for anything else, including a missing or malformed header.
 * @param {String|Buffer} payload The request body exactly as it was received (Express: express.raw()), not parsed JSON.
 * @param {String} signatureHeader The X-DocSpring-Signature header.
 * @param {String} secret The webhook's signing secret.
 * @param {Object} [options]
 * @param {Number} [options.tolerance=300] How many seconds old (or early) the timestamp can be. 5 minutes by default.
 * @param {Number} [options.now] The current Unix time in seconds, for tests. The system clock by default.
 * @returns {Boolean}
 */
export function verifyWebhookSignature(payload, signatureHeader, secret, { tolerance = WEBHOOK_SIGNATURE_TOLERANCE, now } = {}) {
    let body;
    if (typeof payload === 'string') {
        body = Buffer.from(payload, 'utf8');
    } else if (payload instanceof Uint8Array) {
        body = Buffer.from(payload);
    } else {
        return false;
    }
    if (typeof signatureHeader !== 'string' || typeof secret !== 'string' || secret === '') return false;

    const parts = signatureHeader.split(',').map((part) => {
        const trimmed = part.trim();
        const separator = trimmed.indexOf('=');
        return separator === -1 ? [trimmed, ''] : [trimmed.slice(0, separator), trimmed.slice(separator + 1)];
    });
    const timestampPart = parts.find(([key]) => key === 't');
    const signatures = parts.filter(([key, value]) => key === 'v1' && value !== '').map(([, value]) => value);
    if (!timestampPart || !/^[0-9]+$/.test(timestampPart[1]) || signatures.length === 0) return false;
    const timestamp = timestampPart[1];

    const current = now === undefined || now === null ? Math.floor(Date.now() / 1000) : Number(now);
    if (Math.abs(current - Number(timestamp)) > tolerance) return false;

    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(`${timestamp}.`, 'utf8');
    hmac.update(body);
    const expected = Buffer.from(hmac.digest('hex'), 'utf8');
    // Constant time, so a timing attack can't find a valid signature byte by byte
    return signatures.some((signature) => {
        const actual = Buffer.from(signature, 'utf8');
        return actual.length === expected.length && crypto.timingSafeEqual(actual, expected);
    });
}
