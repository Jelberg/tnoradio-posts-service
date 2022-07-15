import e from "express";
import { TagCreator } from "../useCases/TagCreator.uc";

interface UseCase {
  createTag: TagCreator;
}

export class CreateTagController {
  constructor(private useCase: UseCase) {}
  async handle(req: e.Request, res: e.Response) {
    this.useCase.createTag.CreateTag(req.body);
    try {
      const tag = await this.useCase.createTag.execute();
      return res.status(201).send(tag);
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  }
}
