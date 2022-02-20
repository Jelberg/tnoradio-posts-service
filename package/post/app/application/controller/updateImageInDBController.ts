import e from "express";
import { UpdateImageInDB } from "../useCases/UpdateImageInDB.uc";
var fs = require("fs");
var path = require("path");

interface UseCase {
  updateImageInDB: UpdateImageInDB;
}

export class UpdateImageInDBController {
  constructor(private useCase: UseCase) {}

  async handle(req, res) {
    console.log("ENTRÓ a CONTROLLER");
    console.log(req.body.slug);
    console.log(req.body.type);
    console.log(req.body.owner);
    var obj = {
      imageName: req.body.type,
      imageUrl: req.body.slug,
      owner: req.body.owner,
      file: {
        data: fs.readFileSync(
          path.join("public/post_images/main/", req.file.filename)
        ),
        contentType: "image/jpeg",
      },
    };

    console.log(obj);

    this.useCase.updateImageInDB.SetImage(obj);
    this.useCase.updateImageInDB.SetName(req.body.type);
    this.useCase.updateImageInDB.SetSlug(req.body.slug);

    try {
      const image = await this.useCase.updateImageInDB.execute();
      console.log("CONTROLLER" + image);
      return res.status(200).send(image);
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  }
}
