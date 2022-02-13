import e from "express";
import { UpdatePost } from "../useCases/PostUpdater";

interface UseCase {
  updatePost: UpdatePost;
}

export class UpdatePostController {
  constructor(private useCase: UseCase) {}

  async handle(req: e.Request, res: e.Response) {
    console.log(req.body);
    try {
      //Set id
      this.useCase.updatePost.setId(req.params._id);
      // Set user
      this.useCase.updatePost.setDomainPost(req.body);

      const Post = await this.useCase.updatePost.execute();
      console.log("Post CONTROLLER", Post);

      if (Post == null) return res.status(400).send("Post not Updated");
      else return res.status(200).send(Post);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
}
