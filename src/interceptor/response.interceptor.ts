import { map, Observable } from 'rxjs';

import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  constructor(private readonly logger: Logger) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const response = {
          response: data,
          status: HttpStatus.OK,
          message: 'ok',
        };
        this.logger.log(response);
        return response;
      }),
    );
  }
}
