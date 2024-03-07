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
  Req,
  UseGuards,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from 'src/book/schemas/book.schema';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';
import { ParseObjectIdPipe } from 'shared/pipes/parseObjectId.pipe';
import { AuthGuard } from '@nestjs/passport';

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
  @UseGuards(AuthGuard())
  async createBook(@Body() book: CreateBookDto, @Req() req): Promise<Book> {
    return this.bookService.createBook(book, req.user);
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
