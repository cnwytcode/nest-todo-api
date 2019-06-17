"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class ApiException extends common_1.HttpException {
    constructor(errorMessage, errorCode, statusCode) {
        super(errorMessage, statusCode);
        this.msg = errorMessage;
        this.code = errorCode;
    }
    getErrorCode() {
        return this.code;
    }
    getErrorMessage() {
        return this.msg;
    }
}
exports.ApiException = ApiException;
//# sourceMappingURL=api.exception.js.map