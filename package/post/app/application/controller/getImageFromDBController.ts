import e from "express";
import { ImageDBGetter } from "../useCases/ImageDBGetter.uc";

interface UseCases {
  imageFromDbGetter: ImageDBGetter;
}

export class GetImageFromDBController {
  constructor(private useCase: UseCases) {}

  async handle(req, res) {
    console.log("EQUESR", req.params);
    //definition to bring all users
    this.useCase.imageFromDbGetter.setImageName(req.params.name);
    this.useCase.imageFromDbGetter.setImageSlug(req.params.slug);

    try {
      const data = await this.useCase.imageFromDbGetter.execute();
      //console.log("CONTRLLER",data);
      if (data == null) return res.status(400).send("Image not Found");
      else return res.status(200).send(data);
    } catch (err) {
      return res.status(400).send(err);
    }

    /*if (isDomainError(product)) {
            res.status(400).send(product.message);
        } else {
            res.send(product);
        }*/
  }
}
