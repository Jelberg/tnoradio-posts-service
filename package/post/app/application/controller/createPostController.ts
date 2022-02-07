import e from "express";
import { PostCreator } from "../useCases/PostCreator";

interface UseCase {
  createPost: PostCreator;
}

export class CreatePostController {
  constructor(private useCase: UseCase) {}
  async handle(req: e.Request, res: e.Response) {
    console.log(req.body);

    this.useCase.createPost.CreatePost(req.body);

    try {
      const user = await this.useCase.createPost.execute();
      //console.log(user);
      return res.status(201).send(user);
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  }
}
