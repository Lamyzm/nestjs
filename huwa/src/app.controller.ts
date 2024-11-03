import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from 'src/cats/cats.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService,
  ) {}

  @Get()
  getHello(
    @Req() req: Request,
    @Body() Body,
    @Param('id') Param: { id: string; name: string },
  ): string {
    console.log(req, Body, Param);
    return this.catsService.hiCatServiceProduct();
  }
}
