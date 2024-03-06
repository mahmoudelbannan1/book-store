import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from 'src/schemas/book.schema';
import { UpdateBookDto } from './dtos/update-book.dto';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async findAllBooks(params: string): Promise<Book[]> {
    //add pagination each page has 3 books
    const resPerPage = 3;
    const currentPage = Number(params['page']) || 1;
    const skip = resPerPage * (currentPage - 1);

    return await this.bookModel.find().limit(resPerPage).skip(skip);
  }

  async searchByBookTitle(query: string): Promise<Book[]> {
    console.log(query['keyword']);
    return await this.bookModel.find({ title: query['keyword'] });
  }

  async findOneBook(id: string): Promise<Book> {
    // const isValidId = mongoose.isValidObjectId(id);
    // if (!isValidId) throw new BadRequestException('please enter correct id');
    const book = await this.bookModel.findById(id);
    if (!book) throw new NotFoundException('this id not found');
    return book;
  }

  async createBook(book: Book): Promise<Book> {
    return await this.bookModel.create(book);
  }

  async updateBook(id: string, book: UpdateBookDto): Promise<Book> {
    // const isValidId = mongoose.isValidObjectId(id);
    // if (!isValidId) throw new BadRequestException('please enter correct id');
    const newBook = await this.bookModel.findByIdAndUpdate(id, book);
    if (!newBook) throw new NotFoundException('this id not found');
    return newBook;
  }

  async deleteOneBook(id: string): Promise<Book> {
    // const isValidId = mongoose.isValidObjectId(id);
    // if (!isValidId) throw new BadRequestException('please enter correct id');
    const deletedBook = await this.bookModel.findByIdAndDelete(id);
    if (!deletedBook) throw new NotFoundException('this id not found');
    return deletedBook;
  }
}
