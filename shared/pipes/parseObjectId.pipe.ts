import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import mongoose, { ObjectId } from 'mongoose';

@Injectable()
export class ParseObjectIdPipe implements PipeTransform {
  transform(value: any): ObjectId {
    if (!mongoose.isValidObjectId(value))
      throw new BadRequestException('Invalid ObjectId');

    return value;
  }
}
