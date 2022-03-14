import e from "express";
import { ImageDBGetter } from "../useCases/ImageDBGetter.uc";

interface UseCases {
  imageFromDbGetter: ImageDBGetter;
}

export class GetImageFromDBController {
  constructor(private useCase: UseCases) {}

  async handle(req, res) {
    this.useCase.imageFromDbGetter.setImageName(req.params.name);
    this.useCase.imageFromDbGetter.setImageSlug(req.params.slug);

    try {
      const data = await this.useCase.imageFromDbGetter.execute();
      if (data == null) return res.status(400).send("Image not Found");
      else return res.status(200).send(data);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
}
