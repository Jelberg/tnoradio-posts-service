import e from "express";
import { PostCreator } from "../useCases/PostCreator";

interface UseCase {
  createPost: PostCreator;
}

export class CreatePostController {
  constructor(private useCase: UseCase) {}
  async handle(req: e.Request, res: e.Response) {
    this.useCase.createPost.createPost(req.body);
    try {
      const post = await this.useCase.createPost.execute();
      return res.status(201).send(post);
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  }
}
