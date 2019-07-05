import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {
  ////catch(exception: T, host: ArgumentsHost) {}
  catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus()

    response
      .status(status)
      .json({
        statusCode: status,
        date: new Date().toLocaleDateString(),
        path: request.url,
      });
  }
}
