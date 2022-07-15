import e from "express";
import { ReadPostPage } from "../useCases/PostPageReader";

interface UseCase {
  getPostsPage: ReadPostPage;
}

export class GetPostsPageController {
  constructor(private useCase: UseCase) {}

  async handle(req: e.Request, res: e.Response) {
    //definition to bring all users
    this.useCase.getPostsPage.setTypeReading("all");
    this.useCase.getPostsPage.setPageSize(parseInt(req.params.pagesize));
    this.useCase.getPostsPage.setPage(parseInt(req.params.page));
    try {
      const posts = await this.useCase.getPostsPage.execute();

      return res.status(200).send(posts);
    } catch (err) {
      console.error(err);
      return res.status(400).send(err);
    }
  }
}
