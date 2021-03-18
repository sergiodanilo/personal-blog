import { Controller, Get } from "@nestjs/common";

@Controller("blog")
export class BlogController {

  @Get("test")
  get() {
    return { blog: "Title" }
  }

}