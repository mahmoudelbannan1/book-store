import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from 'src/schemas/book.schema';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';
import { ParseObjectIdPipe } from 'shared/pipes/parseObjectId.pipe';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @Get() // the query is for pagination
  async findAll(@Query() query: string): Promise<Book[]> {
    return this.bookService.findAllBooks(query);
  }

  @Get('search')
  async findByTitle(@Query() query: string): Promise<Book[]> {
    return this.bookService.searchByBookTitle(query);
  }

  @Get(':id')
  async findOne(@Param('id', ParseObjectIdPipe) id: string): Promise<Book> {
    return this.bookService.findOneBook(id);
  }

  @Post()
  async createBook(@Body() book: CreateBookDto): Promise<Book> {
    return this.bookService.createBook(book);
  }
  @Patch(':id')
  async updateBook(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() book: UpdateBookDto,
  ): Promise<Book> {
    return this.bookService.updateBook(id, book);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteOne(@Param('id', ParseObjectIdPipe) id: string): Promise<Book> {
    return this.bookService.deleteOneBook(id);
  }
}
