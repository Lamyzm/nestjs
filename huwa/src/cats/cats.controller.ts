import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly CatsService: CatsService) {}
  @Get()
  getAllCat() {
    return 'all cat';
  }

  @Get(':id')
  getOneCat() {
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
