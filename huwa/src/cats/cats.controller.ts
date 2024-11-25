import {
  Controller,
  Get,
  Post,
  UseFilters,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';

import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { CatRequestsDto } from './dto/cats.request.dto';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly CatsService: CatsService) {}

  @Get()
  getCurrentCat() {
    return 'current cat';
  }

  @Post()
  signUp(@Body() body: CatRequestsDto) {
    console.log(body);
    return 'signUp';
  }

  @Post('login')
  logIn() {
    return 'login';
  }

  @Post('logout')
  logOut() {
    return 'logout';
  }

  @Post('upload/cats')
  uploadCatImg() {
    return 'uploadImg';
  }
}
