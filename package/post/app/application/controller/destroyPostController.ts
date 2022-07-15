import e from "express";
import { DestroyPost } from "../useCases/PostDestroyer";

interface UseCase {
  destroyPost: DestroyPost;
}

export class DestroyPostController {
  constructor(private useCase: UseCase) {}

  async handle(req: e.Request, res: e.Response) {
    this.useCase.destroyPost.setPostId(req.params._id);

    try {
      if (this.useCase.destroyPost.getPostId != null) {
        //console.log(req.params._id);
        const data = await this.useCase.destroyPost.execute();
        return res.status(200).send(data);
      } else {
        return res.status(400).send("ID not found");
      }
    } catch (err) {
      return res.status(400).send(err);
    }
  }
}
