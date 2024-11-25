import { HttpException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PositiveIntPipe implements PipeTransform {
  transform(value: number) {
    if (value < 0) {
      console.log(Math.abs(value), value);
      throw new HttpException('value > 0', 400);
    }
    return value;
  }
}
