import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from 'src/common/middlewares/logger.middleware';
import { CatsService } from 'src/cats/cats.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import * as mongoose from 'mongoose';
@Module({
  imports: [
    ConfigModule.forRoot(), // 환경변수
    MongooseModule.forRoot(process.env.MONGODB_URI), // 몽고db
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService, CatsService],
})
export class AppModule implements NestModule {
  private readonly isDev: boolean = process.env.MODE === 'dev' ? true : false;
  configure(consumer: MiddlewareConsumer) {
    // 로깅 미들웨어 등록
    consumer.apply(LoggerMiddleware).forRoutes('*');
    mongoose.set('debug', process.env.MODE === 'dev'); // 몽구스 쿼리 로그로 찍히게해줌.
  }
}
