import { UploadImageToDatabase } from "../useCases/UploadImageToBD.uc";
var fs = require("fs");
var path = require("path");

interface UseCase {
  uploadImageToDb: UploadImageToDatabase;
}

export class UploadImageToDBController {
  constructor(private useCase: UseCase) {}

  async handle(req, res) {
    console.log("ENTRÓ");

    console.log(req.body);
    try {
      var obj = {
        _id: null,
        imageName: req.body.type,
        imageUrl: req.body.slug,
        owner: req.body.owner,
        file: {
          data: fs.readFileSync(
            path.join("public/post_images" + "/", req.file.filename)
          ),
          contentType: "image/jpeg",
        },
      };
      console.log("ALSHDHD");
      console.log(obj);

      this.useCase.uploadImageToDb.SetImage(obj);
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }

    try {
      const image = await this.useCase.uploadImageToDb.execute();
      //console.log(user);
      return res.status(201).send(image);
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  }
}
