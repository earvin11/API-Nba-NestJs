import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipePipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {

    // en el value viene el id a evaluar

    if( !isValidObjectId( value ) )
      throw new BadRequestException(`${ value }, is not valid MongoId`);


    return value;
  }
}
