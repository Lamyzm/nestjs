import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // nestJs 에서 제공하는 로그 객체
  private logger = new Logger('HTTP');

  // 새로 생성할때는 type 지정 안되있으므로 아래 타입 타이핑 해주기
  use(req: Request, res: Response, next: NextFunction) {
    // response 완료 이벤트 리스너
    res.on('finish', () => {
      this.logger.log(
        `${req.ip}, ${req.method}, ${res.statusCode}`,
        req.originalUrl,
      );
    });

    next();
  }
}
