import e from "express";
import { ReadPostPageByOwner } from "../useCases/PostPageByOwnerReader";

interface UseCase {
  getPostsPageByOwner: ReadPostPageByOwner;
}

export class GetPostsPageByOwnerController {
  constructor(private useCase: UseCase) {}

  async handle(req: e.Request, res: e.Response) {
    //definition to bring all users
    this.useCase.getPostsPageByOwner.setTypeReading("all");
    this.useCase.getPostsPageByOwner.setPageSize(parseInt(req.params.pagesize));
    this.useCase.getPostsPageByOwner.setPage(parseInt(req.params.page));
    this.useCase.getPostsPageByOwner.setOwner(req.params.owner);
    try {
      const posts = await this.useCase.getPostsPageByOwner.execute();

      return res.status(200).send(posts);
    } catch (err) {
      console.error(err);
      return res.status(400).send(err);
    }
  }
}
