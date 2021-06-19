import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { BlogPostsService } from './blog-posts.service';
import { BlogPostDto } from './blog-post.dto';
import { BlogPost } from './blog-post.schema';

@Controller("blog-posts")
export class BlogPostsController {

  constructor(private postService: BlogPostsService) {}

  @Post()
  async create(@Body() createPost: BlogPostDto) {
    this.postService.create(createPost);
  }

  @Get()
  async getAllPosts(): Promise<BlogPost[]> {
    return this.postService.findAll();
  }

  @Get(":id")
  async getPost(@Param('id') postId: string): Promise<BlogPost> {
    return this.postService.findById(postId);
  }

}
