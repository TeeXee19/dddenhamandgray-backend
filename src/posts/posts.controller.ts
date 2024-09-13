import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Request, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto, UpdatePostDto } from './dto/posts.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';


@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Post()
  create(
    @Request() req,
    @Body() createPostDto: CreatePostDto
  ) {
    console.log("REQUEST USER: ", req.user)
    return this.postsService.create({authorId: req.user.sub, ...createPostDto});
  }

  @Get()
  findAll(
    @Query('pageSize') pageSize?: number,
    @Query('page') page?: number,
  ) {
    pageSize = pageSize ?? 3
    page = page ?? 1
    return this.postsService.findAll(+pageSize, +page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
