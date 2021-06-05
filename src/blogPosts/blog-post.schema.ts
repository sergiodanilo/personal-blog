import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogPostDocument = BlogPost & Document;

@Schema({ collection: 'blog_posts' })
export class BlogPost {

  @Prop()
  _id: string;

  @Prop()
  title: string;

  @Prop()
  content: number;

  @Prop()
  created: Date;

}

export const BlogPostSchema = SchemaFactory.createForClass(BlogPost);