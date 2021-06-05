import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogPostsModule } from './blogPosts/blog-posts.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:r%21LfaJnrbG4skL2@cluster0-tmjn4.mongodb.net',
      {dbName: 'blog'}
    ),
    BlogPostsModule
  ],
})
export class AppModule {}
