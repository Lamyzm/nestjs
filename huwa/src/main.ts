import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //  *등록! classValidation 사용
  app.useGlobalFilters(new HttpExceptionFilter()); // 글로벌로 Filter 적용
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
