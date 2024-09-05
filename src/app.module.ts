import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';
import { DbService } from './db/db.service';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [AuthModule, DbModule, PostsModule],
  controllers: [AppController],
  providers: [AppService, DbService],
})
export class AppModule {}
