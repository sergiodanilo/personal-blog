import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogPostDocument = BlogPost & Document;

@Schema({ collection: 'blog_posts' })
export class BlogPost {

  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  content: Array<any>;

  @Prop()
  created: Date;

}

export const BlogPostSchema = SchemaFactory.createForClass(BlogPost);