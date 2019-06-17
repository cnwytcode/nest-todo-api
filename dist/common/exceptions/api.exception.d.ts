import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiErrorCode } from '../enums/api-error-code.enum';
export declare class ApiException extends HttpException {
    private msg;
    private code;
    constructor(errorMessage: string, errorCode: ApiErrorCode, statusCode?: HttpStatus);
    getErrorCode(): ApiErrorCode;
    getErrorMessage(): string;
}
