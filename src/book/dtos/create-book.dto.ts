import { Category } from 'src/schemas/book.schema';

export class CreateBookDto {
  title: string;

  description: string;

  author: string;

  price: number;

  category: Category;
}
