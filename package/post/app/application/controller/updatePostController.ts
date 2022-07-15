import e from "express";
import { UpdatePost } from "../useCases/PostUpdater";

interface UseCase {
  updatePost: UpdatePost;
}

export class UpdatePostController {
  constructor(private useCase: UseCase) {}

  async handle(req: e.Request, res: e.Response) {
    try {
      this.useCase.updatePost.setId(req.params._id);
      this.useCase.updatePost.setDomainPost(req.body);

      const post = await this.useCase.updatePost.execute();

      if (post === null) return res.status(400).send("Post not Updated");
      else return res.status(200).send(post);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
}
