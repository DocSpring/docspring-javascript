/**
 * API v1
 * DocSpring is a service that helps you fill out and sign PDF templates.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './api/Client', './model/AddFieldsData', './model/AddFieldsTemplateResponse', './model/AuthenticationError', './model/AuthenticationSuccessResponse', './model/CombinePdfsData', './model/CombinedSubmission', './model/CombinedSubmissionAction', './model/CombinedSubmissionData', './model/CopyTemplateData', './model/CreateCombinedSubmissionResponse', './model/CreateCustomFileData', './model/CreateCustomFileResponse', './model/CreateFolderData', './model/CreateHtmlTemplateData', './model/CreateSubmissionBatchResponse', './model/CreateSubmissionBatchSubmissionsResponse', './model/CreateSubmissionDataRequestData', './model/CreateSubmissionDataRequestTokenResponse', './model/CreateSubmissionDataRequestTokenResponseToken', './model/CreateSubmissionResponse', './model/CreateTemplateFromUploadData', './model/CustomFile', './model/Error', './model/Folder', './model/FoldersFolder', './model/FullTemplate', './model/FullTemplateDefaults', './model/HtmlTemplateData', './model/InvalidRequest', './model/ListSubmissionsResponse', './model/MoveFolderData', './model/MoveTemplateData', './model/PendingTemplate', './model/RenameFolderData', './model/Submission', './model/SubmissionAction', './model/SubmissionBatch', './model/SubmissionBatchData', './model/SubmissionData', './model/SubmissionDataBatchRequest', './model/SubmissionDataRequest', './model/Template', './model/TemplateData', './model/TemplatestemplateIdaddFieldsFields', './model/UpdateDataRequestResponse', './model/UpdateSubmissionDataRequestData', './model/UpdateTemplateData', './model/UpdateTemplateResponse', './model/UploadTemplateData', './model/UploadTemplateDataDocument', './model/UploadTemplateDataDocumentMetadata', './api/PDFApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./api/Client'), require('./model/AddFieldsData'), require('./model/AddFieldsTemplateResponse'), require('./model/AuthenticationError'), require('./model/AuthenticationSuccessResponse'), require('./model/CombinePdfsData'), require('./model/CombinedSubmission'), require('./model/CombinedSubmissionAction'), require('./model/CombinedSubmissionData'), require('./model/CopyTemplateData'), require('./model/CreateCombinedSubmissionResponse'), require('./model/CreateCustomFileData'), require('./model/CreateCustomFileResponse'), require('./model/CreateFolderData'), require('./model/CreateHtmlTemplateData'), require('./model/CreateSubmissionBatchResponse'), require('./model/CreateSubmissionBatchSubmissionsResponse'), require('./model/CreateSubmissionDataRequestData'), require('./model/CreateSubmissionDataRequestTokenResponse'), require('./model/CreateSubmissionDataRequestTokenResponseToken'), require('./model/CreateSubmissionResponse'), require('./model/CreateTemplateFromUploadData'), require('./model/CustomFile'), require('./model/Error'), require('./model/Folder'), require('./model/FoldersFolder'), require('./model/FullTemplate'), require('./model/FullTemplateDefaults'), require('./model/HtmlTemplateData'), require('./model/InvalidRequest'), require('./model/ListSubmissionsResponse'), require('./model/MoveFolderData'), require('./model/MoveTemplateData'), require('./model/PendingTemplate'), require('./model/RenameFolderData'), require('./model/Submission'), require('./model/SubmissionAction'), require('./model/SubmissionBatch'), require('./model/SubmissionBatchData'), require('./model/SubmissionData'), require('./model/SubmissionDataBatchRequest'), require('./model/SubmissionDataRequest'), require('./model/Template'), require('./model/TemplateData'), require('./model/TemplatestemplateIdaddFieldsFields'), require('./model/UpdateDataRequestResponse'), require('./model/UpdateSubmissionDataRequestData'), require('./model/UpdateTemplateData'), require('./model/UpdateTemplateResponse'), require('./model/UploadTemplateData'), require('./model/UploadTemplateDataDocument'), require('./model/UploadTemplateDataDocumentMetadata'), require('./api/PDFApi'));
  }
}(function(ApiClient, Client, AddFieldsData, AddFieldsTemplateResponse, AuthenticationError, AuthenticationSuccessResponse, CombinePdfsData, CombinedSubmission, CombinedSubmissionAction, CombinedSubmissionData, CopyTemplateData, CreateCombinedSubmissionResponse, CreateCustomFileData, CreateCustomFileResponse, CreateFolderData, CreateHtmlTemplateData, CreateSubmissionBatchResponse, CreateSubmissionBatchSubmissionsResponse, CreateSubmissionDataRequestData, CreateSubmissionDataRequestTokenResponse, CreateSubmissionDataRequestTokenResponseToken, CreateSubmissionResponse, CreateTemplateFromUploadData, CustomFile, Error, Folder, FoldersFolder, FullTemplate, FullTemplateDefaults, HtmlTemplateData, InvalidRequest, ListSubmissionsResponse, MoveFolderData, MoveTemplateData, PendingTemplate, RenameFolderData, Submission, SubmissionAction, SubmissionBatch, SubmissionBatchData, SubmissionData, SubmissionDataBatchRequest, SubmissionDataRequest, Template, TemplateData, TemplatestemplateIdaddFieldsFields, UpdateDataRequestResponse, UpdateSubmissionDataRequestData, UpdateTemplateData, UpdateTemplateResponse, UploadTemplateData, UploadTemplateDataDocument, UploadTemplateDataDocumentMetadata, PDFApi) {
  'use strict';

  /**
   * An API client for the DocSpring PDF generation service.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var DocSpring = require('index'); // See note below*.
   * var xxxSvc = new DocSpring.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new DocSpring.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new DocSpring.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new DocSpring.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.4.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    // Alias that makes more sense
    Configuration: ApiClient,
    /**
     * The custom Client constructor.
     * @property {module:api/Client}
     */
    Client: Client,
    /**
     * The AddFieldsData model constructor.
     * @property {module:model/AddFieldsData}
     */
    AddFieldsData: AddFieldsData,
    /**
     * The AddFieldsTemplateResponse model constructor.
     * @property {module:model/AddFieldsTemplateResponse}
     */
    AddFieldsTemplateResponse: AddFieldsTemplateResponse,
    /**
     * The AuthenticationError model constructor.
     * @property {module:model/AuthenticationError}
     */
    AuthenticationError: AuthenticationError,
    /**
     * The AuthenticationSuccessResponse model constructor.
     * @property {module:model/AuthenticationSuccessResponse}
     */
    AuthenticationSuccessResponse: AuthenticationSuccessResponse,
    /**
     * The CombinePdfsData model constructor.
     * @property {module:model/CombinePdfsData}
     */
    CombinePdfsData: CombinePdfsData,
    /**
     * The CombinedSubmission model constructor.
     * @property {module:model/CombinedSubmission}
     */
    CombinedSubmission: CombinedSubmission,
    /**
     * The CombinedSubmissionAction model constructor.
     * @property {module:model/CombinedSubmissionAction}
     */
    CombinedSubmissionAction: CombinedSubmissionAction,
    /**
     * The CombinedSubmissionData model constructor.
     * @property {module:model/CombinedSubmissionData}
     */
    CombinedSubmissionData: CombinedSubmissionData,
    /**
     * The CopyTemplateData model constructor.
     * @property {module:model/CopyTemplateData}
     */
    CopyTemplateData: CopyTemplateData,
    /**
     * The CreateCombinedSubmissionResponse model constructor.
     * @property {module:model/CreateCombinedSubmissionResponse}
     */
    CreateCombinedSubmissionResponse: CreateCombinedSubmissionResponse,
    /**
     * The CreateCustomFileData model constructor.
     * @property {module:model/CreateCustomFileData}
     */
    CreateCustomFileData: CreateCustomFileData,
    /**
     * The CreateCustomFileResponse model constructor.
     * @property {module:model/CreateCustomFileResponse}
     */
    CreateCustomFileResponse: CreateCustomFileResponse,
    /**
     * The CreateFolderData model constructor.
     * @property {module:model/CreateFolderData}
     */
    CreateFolderData: CreateFolderData,
    /**
     * The CreateHtmlTemplateData model constructor.
     * @property {module:model/CreateHtmlTemplateData}
     */
    CreateHtmlTemplateData: CreateHtmlTemplateData,
    /**
     * The CreateSubmissionBatchResponse model constructor.
     * @property {module:model/CreateSubmissionBatchResponse}
     */
    CreateSubmissionBatchResponse: CreateSubmissionBatchResponse,
    /**
     * The CreateSubmissionBatchSubmissionsResponse model constructor.
     * @property {module:model/CreateSubmissionBatchSubmissionsResponse}
     */
    CreateSubmissionBatchSubmissionsResponse: CreateSubmissionBatchSubmissionsResponse,
    /**
     * The CreateSubmissionDataRequestData model constructor.
     * @property {module:model/CreateSubmissionDataRequestData}
     */
    CreateSubmissionDataRequestData: CreateSubmissionDataRequestData,
    /**
     * The CreateSubmissionDataRequestTokenResponse model constructor.
     * @property {module:model/CreateSubmissionDataRequestTokenResponse}
     */
    CreateSubmissionDataRequestTokenResponse: CreateSubmissionDataRequestTokenResponse,
    /**
     * The CreateSubmissionDataRequestTokenResponseToken model constructor.
     * @property {module:model/CreateSubmissionDataRequestTokenResponseToken}
     */
    CreateSubmissionDataRequestTokenResponseToken: CreateSubmissionDataRequestTokenResponseToken,
    /**
     * The CreateSubmissionResponse model constructor.
     * @property {module:model/CreateSubmissionResponse}
     */
    CreateSubmissionResponse: CreateSubmissionResponse,
    /**
     * The CreateTemplateFromUploadData model constructor.
     * @property {module:model/CreateTemplateFromUploadData}
     */
    CreateTemplateFromUploadData: CreateTemplateFromUploadData,
    /**
     * The CustomFile model constructor.
     * @property {module:model/CustomFile}
     */
    CustomFile: CustomFile,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The Folder model constructor.
     * @property {module:model/Folder}
     */
    Folder: Folder,
    /**
     * The FoldersFolder model constructor.
     * @property {module:model/FoldersFolder}
     */
    FoldersFolder: FoldersFolder,
    /**
     * The FullTemplate model constructor.
     * @property {module:model/FullTemplate}
     */
    FullTemplate: FullTemplate,
    /**
     * The FullTemplateDefaults model constructor.
     * @property {module:model/FullTemplateDefaults}
     */
    FullTemplateDefaults: FullTemplateDefaults,
    /**
     * The HtmlTemplateData model constructor.
     * @property {module:model/HtmlTemplateData}
     */
    HtmlTemplateData: HtmlTemplateData,
    /**
     * The InvalidRequest model constructor.
     * @property {module:model/InvalidRequest}
     */
    InvalidRequest: InvalidRequest,
    /**
     * The ListSubmissionsResponse model constructor.
     * @property {module:model/ListSubmissionsResponse}
     */
    ListSubmissionsResponse: ListSubmissionsResponse,
    /**
     * The MoveFolderData model constructor.
     * @property {module:model/MoveFolderData}
     */
    MoveFolderData: MoveFolderData,
    /**
     * The MoveTemplateData model constructor.
     * @property {module:model/MoveTemplateData}
     */
    MoveTemplateData: MoveTemplateData,
    /**
     * The PendingTemplate model constructor.
     * @property {module:model/PendingTemplate}
     */
    PendingTemplate: PendingTemplate,
    /**
     * The RenameFolderData model constructor.
     * @property {module:model/RenameFolderData}
     */
    RenameFolderData: RenameFolderData,
    /**
     * The Submission model constructor.
     * @property {module:model/Submission}
     */
    Submission: Submission,
    /**
     * The SubmissionAction model constructor.
     * @property {module:model/SubmissionAction}
     */
    SubmissionAction: SubmissionAction,
    /**
     * The SubmissionBatch model constructor.
     * @property {module:model/SubmissionBatch}
     */
    SubmissionBatch: SubmissionBatch,
    /**
     * The SubmissionBatchData model constructor.
     * @property {module:model/SubmissionBatchData}
     */
    SubmissionBatchData: SubmissionBatchData,
    /**
     * The SubmissionData model constructor.
     * @property {module:model/SubmissionData}
     */
    SubmissionData: SubmissionData,
    /**
     * The SubmissionDataBatchRequest model constructor.
     * @property {module:model/SubmissionDataBatchRequest}
     */
    SubmissionDataBatchRequest: SubmissionDataBatchRequest,
    /**
     * The SubmissionDataRequest model constructor.
     * @property {module:model/SubmissionDataRequest}
     */
    SubmissionDataRequest: SubmissionDataRequest,
    /**
     * The Template model constructor.
     * @property {module:model/Template}
     */
    Template: Template,
    /**
     * The TemplateData model constructor.
     * @property {module:model/TemplateData}
     */
    TemplateData: TemplateData,
    /**
     * The TemplatestemplateIdaddFieldsFields model constructor.
     * @property {module:model/TemplatestemplateIdaddFieldsFields}
     */
    TemplatestemplateIdaddFieldsFields: TemplatestemplateIdaddFieldsFields,
    /**
     * The UpdateDataRequestResponse model constructor.
     * @property {module:model/UpdateDataRequestResponse}
     */
    UpdateDataRequestResponse: UpdateDataRequestResponse,
    /**
     * The UpdateSubmissionDataRequestData model constructor.
     * @property {module:model/UpdateSubmissionDataRequestData}
     */
    UpdateSubmissionDataRequestData: UpdateSubmissionDataRequestData,
    /**
     * The UpdateTemplateData model constructor.
     * @property {module:model/UpdateTemplateData}
     */
    UpdateTemplateData: UpdateTemplateData,
    /**
     * The UpdateTemplateResponse model constructor.
     * @property {module:model/UpdateTemplateResponse}
     */
    UpdateTemplateResponse: UpdateTemplateResponse,
    /**
     * The UploadTemplateData model constructor.
     * @property {module:model/UploadTemplateData}
     */
    UploadTemplateData: UploadTemplateData,
    /**
     * The UploadTemplateDataDocument model constructor.
     * @property {module:model/UploadTemplateDataDocument}
     */
    UploadTemplateDataDocument: UploadTemplateDataDocument,
    /**
     * The UploadTemplateDataDocumentMetadata model constructor.
     * @property {module:model/UploadTemplateDataDocumentMetadata}
     */
    UploadTemplateDataDocumentMetadata: UploadTemplateDataDocumentMetadata,
    /**
     * The PDFApi service constructor.
     * @property {module:api/PDFApi}
     */
    PDFApi: PDFApi
  };

  return exports;
}));
