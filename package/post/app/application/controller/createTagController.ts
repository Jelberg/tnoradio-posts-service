import e from "express";
import { TagCreator } from "../useCases/TagCreator.uc";

interface UseCase {
  createTag: TagCreator;
}

export class CreateTagController {
  constructor(private useCase: UseCase) {}
  async handle(req: e.Request, res: e.Response) {
    console.log(req.body);

    this.useCase.createTag.CreateTag(req.body);

    try {
      const user = await this.useCase.createTag.execute();
      //console.log(user);
      return res.status(201).send(user);
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  }
}
