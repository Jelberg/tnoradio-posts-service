import e from "express";
import { ReadPost } from "../useCases/PostReader";

interface UseCase {
  getAllPosts: ReadPost;
}

export class GetAllPostsController {
  constructor(private useCase: UseCase) {}

  async handle(req: e.Request, res: e.Response) {
    //definition to bring all users
    this.useCase.getAllPosts.setTypeReading("all");

    try {
      const posts = await this.useCase.getAllPosts.execute();

      return res.status(200).send(posts);
    } catch (err) {
      console.error(err);
      return res.status(400).send(err);
    }
  }
}
