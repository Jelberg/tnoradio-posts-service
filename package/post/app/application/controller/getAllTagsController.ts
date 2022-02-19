import e from "express";
import { TagListGetter } from "../useCases/TagListGetter.uc";

interface UseCase {
  getAllTags: TagListGetter;
}

export class GetAllTagsController {
  constructor(private useCase: UseCase) {}

  async handle(req: e.Request, res: e.Response) {
    //definition to bring all users
    this.useCase.getAllTags.setTypeReading("all");

    try {
      const users = await this.useCase.getAllTags.execute();
      return res.status(200).send(users);
    } catch (err) {
      console.error(err);
      return res.status(400).send(err);
    }
  }
}
