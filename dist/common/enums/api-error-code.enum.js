"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiErrorCode;
(function (ApiErrorCode) {
    ApiErrorCode[ApiErrorCode["TIMEOUT"] = -1] = "TIMEOUT";
    ApiErrorCode[ApiErrorCode["SUCCESS"] = 200] = "SUCCESS";
    ApiErrorCode[ApiErrorCode["INVALID_USER_ID"] = 10001] = "INVALID_USER_ID";
    ApiErrorCode[ApiErrorCode["INVALID_POST_ID"] = 10002] = "INVALID_POST_ID";
    ApiErrorCode[ApiErrorCode["INVALID_PARAM"] = 10001] = "INVALID_PARAM";
    ApiErrorCode[ApiErrorCode["INVALID_CREDENTIAL"] = 40001] = "INVALID_CREDENTIAL";
    ApiErrorCode[ApiErrorCode["TOKEN_MISSING"] = 41001] = "TOKEN_MISSING";
    ApiErrorCode[ApiErrorCode["INVALID_TOKEN"] = 41002] = "INVALID_TOKEN";
    ApiErrorCode[ApiErrorCode["API_UNAUTHORIZED"] = 50001] = "API_UNAUTHORIZED";
    ApiErrorCode[ApiErrorCode["API_LIMIT"] = 50002] = "API_LIMIT";
})(ApiErrorCode = exports.ApiErrorCode || (exports.ApiErrorCode = {}));
//# sourceMappingURL=api-error-code.enum.js.map