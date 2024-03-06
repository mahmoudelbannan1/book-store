import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from 'src/schemas/book.schema';
import { UpdateBookDto } from './dtos/update-book.dto';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async findAllBooks(): Promise<Book[]> {
    return await this.bookModel.find();
  }
  async findOneBook(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id);
    if (!book) throw new NotFoundException('this id not found');
    return book;
  }
  async createBook(book: Book): Promise<Book> {
    return await this.bookModel.create(book);
  }
  async updateBook(id: string, book: UpdateBookDto): Promise<Book> {
    const newBook = await this.bookModel.findByIdAndUpdate(id, book);
    if (!newBook) throw new NotFoundException('this id not found');
    return newBook;
  }
}
