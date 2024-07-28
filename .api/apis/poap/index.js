"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'poap/1.0.0 (api/6.1.1)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * This endpoint is used to claim a POAP from a delivery.
     *
     * @summary /actions/claim-delivery-v2
     */
    SDK.prototype.pOSTActionsClaimDeliveryV2 = function (body) {
        return this.core.fetch('/actions/claim-delivery-v2', 'post', body);
    };
    /**
     * This endpoint is used to claim a POAP given a previously created mint-link. The claim
     * status of the mint-link can be retrieved with the GET /actions/claim-qr endpoint.
     *
     * @summary /actions/claim-qr
     */
    SDK.prototype.pOSTActionsClaimQr = function (body) {
        return this.core.fetch('/actions/claim-qr', 'post', body);
    };
    /**
     * This endpoint can be used to look up information on an individual mint-link including
     * the claim status, `secret` code, collector (if claimed), and event information.
     *
     * @summary /actions/claim-qr
     */
    SDK.prototype.gETActionsClaimQr = function (metadata) {
        return this.core.fetch('/actions/claim-qr', 'get', metadata);
    };
    /**
     * This endpoint returns a list of POAPs held by an address and the event details, token
     * ID, chain, and owner address for each.
     *           A 200 status code with an empty list is returned when the address does not
     * hold any POAPs.
     *           If you already know the event ID, you can use GET
     * /actions/scan/{address}/{eventID} to check if an address holds that POAP.
     *           Note: For large collections of POAPs, it may take a while to load the artwork,
     * since average size of the original artwork can be ~2MB per item (we allow upto 4MB). For
     * solving this, we've developed a way to offer compressed artwork. To use this, you can
     * request a smaller, lower resolution version of the image, simply append "?size=small" to
     * the end of the image_url field value. For example,
     * "https://poap.xyz/image.png?size=small".
     *           For more options with artwork sizes, you can also use extra small, small,
     * medium, large, and extra large file sizes, in addition to the original size.
     *           xsmall = 64x64px
     *           small = 128x128px
     *           medium = 256x256px
     *           large = 512x512px
     *           xlarge = 1024x1024px
     *
     * @summary /actions/scan/{address}
     */
    SDK.prototype.gETActionsScan = function (metadata) {
        return this.core.fetch('/actions/scan/{address}', 'get', metadata);
    };
    /**
     * This endpoint is used to create a new delivery.
     *
     * @summary /deliveries
     */
    SDK.prototype.pOSTDeliveries = function (body) {
        return this.core.fetch('/deliveries', 'post', body);
    };
    /**
     * This endpoint returns a paginated list of all deliveries in descending order by ID.
     *
     * @summary /deliveries
     */
    SDK.prototype.gETDeliveries = function (metadata) {
        return this.core.fetch('/deliveries', 'get', metadata);
    };
    /**
     * This endpoint returns delivery information by delivery ID.
     *
     * @summary /delivery/{id}
     */
    SDK.prototype.gETDelivery = function (metadata) {
        return this.core.fetch('/delivery/{id}', 'get', metadata);
    };
    /**
     * This endpoint returns a delivery by it URL safe slug.
     *
     * @summary /delivery/slug/{slug}
     */
    SDK.prototype.gETDeliverySlug = function (metadata) {
        return this.core.fetch('/delivery/slug/{slug}', 'get', metadata);
    };
    /**
     * This endpoint returns the delivery claim status for an address along with the event
     * details.
     *
     * @summary /delivery-addresses/{id}/address/{address}
     */
    SDK.prototype.gETDeliveryAddressesAddress = function (metadata) {
        return this.core.fetch('/delivery-addresses/{id}/address/{address}', 'get', metadata);
    };
    /**
     * This endpoint returns a paginated list of addresses that can claim a delivery.
     *
     * @summary /delivery-addresses/{id}
     */
    SDK.prototype.gETDeliveryAddresses = function (metadata) {
        return this.core.fetch('/delivery-addresses/{id}', 'get', metadata);
    };
    /**
     * This endpoint is used to check if a secret code is valid.
     *
     * @summary /event/validate
     */
    SDK.prototype.pOSTEventValidate = function (body) {
        return this.core.fetch('/event/validate', 'post', body);
    };
    /**
     * For the specified event ID, this endpoint returns paginated info on the token holders
     * including the token ID, POAP transfer count, and the owner's information like address,
     * amount of POAPs owned, and ENS.
     *
     * @summary /event/{id}/poaps
     */
    SDK.prototype.gETEventPoaps = function (metadata) {
        return this.core.fetch('/event/{id}/poaps', 'get', metadata);
    };
    /**
     * This endpoint returns the list of `qr_hash` codes for a particular event, along with the
     * claim status of each code for whether it has been claimed yet.
     *
     * @summary /event/{id}/qr-codes
     */
    SDK.prototype.pOSTEventQrCodes = function (body, metadata) {
        return this.core.fetch('/event/{id}/qr-codes', 'post', body, metadata);
    };
    /**
     * This endpoint is used to create a new event. Please see the [quality
     * guidelines](https://documentation.poap.tech/docs/integration-quality-requirements) for
     * responsible event creation and distribution as well as why it's important.
     *
     * After submitting, an email will be sent to the provided email address confirming the
     * creation of the event. A follow up email will be sent when the event has been approved
     * or declined. If approved, the email will contain the requested mint-link codes for the
     * event.
     *
     * **Note**: For testing, please indicate that it's a test by adding 'test' on the artwork
     * and title, mark the event as private, and request no more than 10 mint links.
     *
     *
     * @summary /events
     */
    SDK.prototype.pOSTEvents = function (body) {
        return this.core.fetch('/events', 'post', body);
    };
    /**
     * This endpoint is used to retrieve the event details for a specified event ID.
     *
     * @summary /events/id/{id}
     */
    SDK.prototype.gETEventsId = function (metadata) {
        return this.core.fetch('/events/id/{id}', 'get', metadata);
    };
    /**
     * This endpoint is used to modify an event’s details. Attributes that can be changed are
     * the event name, description, country, city, start date, end date, expire date, and URL.
     * The image cannot be updated.
     *
     * **Note**: An event can only be edited within 30 days of the event start date.
     *
     *
     * @summary /events/{fancyId}
     */
    SDK.prototype.pUTEvents = function (body, metadata) {
        return this.core.fetch('/events/{fancyId}', 'put', body, metadata);
    };
    /**
     * This endpoint returns event details for the specificed event fancy ID.
     *
     * @summary /events/{fancyId}
     */
    SDK.prototype.gETEvents = function (metadata) {
        return this.core.fetch('/events/{fancyId}', 'get', metadata);
    };
    /**
     * This endpoint is a health check for the API. A 200 OK status indicates the API is up and
     * running, otherwise the API is down.
     *
     * @summary /health-check
     */
    SDK.prototype.gETHealthCheck = function () {
        return this.core.fetch('/health-check', 'get');
    };
    /**
     * This endpoint returns metadata for the specified event and token ID.
     *
     * @summary /metadata/{eventId}/{tokenId}
     */
    SDK.prototype.gETMetadata = function (metadata) {
        return this.core.fetch('/metadata/{eventId}/{tokenId}', 'get', metadata);
    };
    /**
     * This endpoint returns a paginated list of events in descending order by start date.
     *
     * @summary /paginated-events
     */
    SDK.prototype.gETPaginatedEvents = function () {
        return this.core.fetch('/paginated-events', 'get');
    };
    /**
     * This endpoint is used to check the status of the POAP minting. When the claim is sent,
     * it returns an ID with which we can know if it has been minted or if there was a problem
     * with it.
     *
     * @summary /transaction-requests/{id}
     */
    SDK.prototype.gETTransactionRequests = function (metadata) {
        return this.core.fetch('/transaction-requests/{id}', 'get', metadata);
    };
    /**
     * This endpoint is used to get the number of the total active redeem requests for an
     * event.
     *
     * @summary /redeem-requests/active/count
     */
    SDK.prototype.gETRedeemRequestsActiveCount = function (metadata) {
        return this.core.fetch('/redeem-requests/active/count', 'get', metadata);
    };
    /**
     * This endpoint is used to request more codes for one of the following redeem methods: QR
     * Code, Secret Website, or Secret Word.
     *
     * @summary /redeem-requests
     */
    SDK.prototype.pOSTRedeemRequests = function (body) {
        return this.core.fetch('/redeem-requests', 'post', body);
    };
    /**
     * This endpoint is used to obtain information about a specific secret word claims and its
     * related event.
     *
     * @summary /secret/{secret_word}
     */
    SDK.prototype.gETSecret = function (metadata) {
        return this.core.fetch('/secret/{secret_word}', 'get', metadata);
    };
    /**
     * This endpoint is used to modify an existing secret word claim for a specific event.
     *
     * To prevent someone from guessing your secret word, please use a generated randomized
     * phrase (eg: increase-group-student), and keep your mint window open for less than 10
     * minutes.
     *
     * Once the "word" or "website" is updated as you need, it's intended to be shared with
     * your collectors to claim their POAP. Note: "word" is not compatible for claiming via
     * API.
     *
     * If using secret word, direct collectors to enter the secret word into POAP Mobile app.
     * If using "website", access via browser. If POAP Mobile app is on device when accessing
     * "website", this will re-direct to POAP Mobile app and mint.
     *
     *
     *
     * @summary /secret-requests
     */
    SDK.prototype.pUTSecretRequests = function (body) {
        return this.core.fetch('/secret-requests', 'put', body);
    };
    /**
     * This endpoint is used to create a new secret word claim for a specific event. Secret
     * word is a distribution method where POAPs can be claimed by using the specified secret
     * word. This method only works on mobile when used with POAP Mobile app.
     *
     * To prevent someone from guessing your secret word, please use a generated randomized
     * phrase (eg: increase-group-student), and keep your mint window open for less than 10
     * minutes.
     *
     * Once the "word" or "website" is created, it's intended to be shared with your collectors
     * to claim their POAP.
     *
     * Note: "word" is not compatible for claiming via API.
     * If using secret word, direct collectors to enter the secret word into POAP Mobile app.
     * If using "website", access via browser. If POAP Mobile app is on device when accessing
     * "website", this will re-direct to POAP Mobile app and mint.
     *
     *
     *
     * @summary /secret-requests
     */
    SDK.prototype.pOSTSecretRequests = function (body) {
        return this.core.fetch('/secret-requests', 'post', body);
    };
    /**
     * This endpoint returns the POAP image URL for the specified token ID. It will return an
     * HTTP status 302 with a redirect to the image URL location.
     *
     * @summary /token/{tokenId}/image
     */
    SDK.prototype.gETTokenImage = function (metadata) {
        return this.core.fetch('/token/{tokenId}/image', 'get', metadata);
    };
    /**
     * For the specified token ID, this endpoint returns the event details, token ID, owner's
     * address, layer the POAP is currently on, and the POAP supply for that event.
     *
     * @summary /token/{tokenId}
     */
    SDK.prototype.gETToken = function (metadata) {
        return this.core.fetch('/token/{tokenId}', 'get', metadata);
    };
    /**
     * This endpoint is used to claim a POAP by using a website name. Not compatible when using
     * "word" or secret word via API.
     *
     * @summary /website/claim
     */
    SDK.prototype.pOSTWebsiteClaim = function (body) {
        return this.core.fetch('/website/claim', 'post', body);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
