import { HttpException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PositiveIntPipe implements PipeTransform {
  transform() {}
}
