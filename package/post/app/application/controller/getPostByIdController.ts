import e from "express";
import { GetPostById } from "../useCases/PostByIdGetter";

interface UseCases {
  getPostById: GetPostById;
}

export class GetPostByIdController {
  constructor(private useCase: UseCases) {}

  async handle(req: e.Request, res: e.Response) {
    console.log("EQUESR", req.params);
    //definition to bring all users
    this.useCase.getPostById.createPostId(req.params._id);

    try {
      const data = await this.useCase.getPostById.execute();
      console.log("CONTRLLER", data);
      if (data == null) return res.status(400).send("Post not Found");
      else return res.status(200).send(data);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
}
