import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { DbModule } from 'src/db/db.module';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [DbModule, AuthModule],
  controllers: [PostsController],
  providers: [PostsService, AuthService],
})
export class PostsModule {}
