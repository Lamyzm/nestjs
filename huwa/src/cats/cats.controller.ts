import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { HttpExceptionFilter } from '../http-exception.filter';
import { PositiveIntPipe } from '../pipes/positive-int.pipe';

@Controller('cats')
export class CatsController {
  constructor(private readonly CatsService: CatsService) {}

  @Get()
  @UseFilters(HttpExceptionFilter)
  getAllCat() {
    //* Error 처리 방법 --------------------------------
    // throw new Error("Http error") => x  express 처럼 Error 객체를 넘기지 않음
    // throw new HttpException('Forbidden', 401);  // => 해당 객체 반환.
    throw new HttpException({ success: false, message: 'api is broken' }, 401); //오버라이딩 가능
    return 'all cat';
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    console.log(param);
    console.log(typeof param);
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create a new cat';
  }

  @Put(':id')
  updateCat() {
    return 'update a cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'patch a cat';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete a cat';
  }
}
