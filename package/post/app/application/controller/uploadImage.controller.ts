import { UploadImage } from "../useCases/UploadImage.uc";
var fs = require("fs");
var path = require("path");

interface UseCase {
  uploadImage: UploadImage;
}

export class UploadImageController {
  constructor(private useCase: UseCase) {}

  async handle(req, res) {
    console.log("upload image controller");

    console.log(req.file);
    try {
      var obj = {
        _id: null,
        imageName: req.body.type,
        imageUrl: req.body.slug,
        owner: req.body.owner,
        file: {
          data: fs.readFileSync(
            path.join("public/post_images/main", req.file.filename)
          ),
          contentType: "image/jpeg",
        },
      };
      console.log("ALSHDHD");
      console.log(obj);

      this.useCase.uploadImage.setMimeType("image/jpeg");
      this.useCase.uploadImage.setName(req.file.filename);
      this.useCase.uploadImage.setPath(
        "public/post_images/main/" + req.file.filename
      );

      const res = await this.useCase.uploadImage.execute();
      console.log("res controller");
      console.log(res);
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  }
}
