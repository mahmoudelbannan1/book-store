import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Category } from 'src/schemas/book.schema';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsEnum(Category, {
    message: 'please enter correct category=>[Adventure,Cassic,Crime,Fantasy]',
  })
  category: Category;
}
