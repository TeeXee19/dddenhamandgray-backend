import { Injectable } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto/posts.dto';
import { DbService } from 'src/db/db.service';


@Injectable()
export class PostsService {
  constructor(
    private dbService: DbService,
  ) { }

  async create(createPostDto: CreatePostDto) {
    return await this.dbService.post.create({
      data: createPostDto
    });
  }

  async findAll(pageSize: number = 3, page: number = 1) {
    return await this.dbService.post.findMany({
      take: pageSize,
      skip: (pageSize * (page - 1))
    })
  }

  async findOne(id: number) {
    return await this.dbService.post.findUnique({
      where: {
        id
      }
    })
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return await this.dbService.post.update({
      where: {
        id
      },
      data: updatePostDto
    })
  }

  async remove(id: number) {
    return await this.dbService.post.delete({
      where: {
        id
      }
    })
  }
}
