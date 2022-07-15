import e from "express";
import { GetPostBySlug } from "../useCases/PostBySlugGetter";

interface UseCase {
  getPostBySlug: GetPostBySlug;
}

export class GetPostBySlugController {
  constructor(private useCase: UseCase) {}

  async handle(req: e.Request, res: e.Response) {
    //console.log("EQUESR", req.params);
    //definition to bring all users
    this.useCase.getPostBySlug.createPostSlug(req.params.slug);

    try {
      const data = await this.useCase.getPostBySlug.execute();
      //console.log("CONTRLLER", data);
      if (data == null) return res.status(400).send("Post not Found");
      else return res.status(200).send(data);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
}
