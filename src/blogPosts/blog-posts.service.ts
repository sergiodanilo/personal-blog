import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BlogPost, BlogPostDocument } from './blog-post.schema';
import { BlogPostDto } from './blog-post.dto';

@Injectable()
export class BlogPostsService {
  constructor(@InjectModel(BlogPost.name) private blogPostModel: Model<BlogPostDocument>) {}

  async create(blogPostDto: BlogPostDto): Promise<BlogPost> {
    const createdBlogPost = new this.blogPostModel(blogPostDto);
    return createdBlogPost.save();
  }

  async findAll(): Promise<BlogPost[]> {
    return this.blogPostModel.find().exec();
  }

}
