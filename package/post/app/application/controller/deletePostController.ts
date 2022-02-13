import e from "express";
import { DeletePost } from "../useCases/PostDeleter";

interface UsesCases {
  deletePost: DeletePost;
}

export class DeletePostController {
  constructor(private useCase: UsesCases) {}

  async handle(req: e.Request, res: e.Response) {
    console.log("CONTROLLER ", req.params);
    try {
      //Set id
      this.useCase.deletePost.setId(req.params._id);

      const data = await this.useCase.deletePost.execute();
      console.log("DELETE ", data);
      if (data == null) return res.status(400).send("Post not Deleted");
      else return res.status(200).send(data);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
}
