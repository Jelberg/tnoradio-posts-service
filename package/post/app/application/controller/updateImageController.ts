import DomainPost from "../../domain/entities/Post";
import { GetPostById } from "../useCases/PostByIdGetter";
import { UpdatePost } from "../useCases/PostUpdater";
import { UpdateImage } from "../useCases/UpdateImage.uc";
var fs = require("fs");
var path = require("path");

interface UseCase {
  updateImage: UpdateImage;
  updatePost: UpdatePost;
  getPost: GetPostById;
}
let post: DomainPost;

export class UpdateImageController {
  constructor(private useCase: UseCase) {}

  async handle(req, res) {
    try {
      var obj = {
        imageName: req.body.type,
        imageUrl: req.body.slug,
        owner: req.body.owner,
        fileId: req.body.fileId,
        file: {
          data: fs.readFileSync(
            path.join("public/post_images/main/", req.file.filename)
          ),
          contentType: "image/jpeg",
        },
      };

      this.useCase.updatePost.setId(req.body.owner);
      this.useCase.getPost.createPostId(req.body.owner);
      this.useCase.updateImage.setMimeType("image/jpeg");
      this.useCase.updateImage.setName(req.file.filename);
      this.useCase.updateImage.setFileId(req.body.fileId);
      this.useCase.updateImage.setPath(
        "public/post_images/main/" + req.file.filename
      );

      const imageUrl = await this.useCase.updateImage.execute();

      post = await this.useCase.getPost.execute();
      post.image = imageUrl;
      this.useCase.updatePost.setDomainPost(post);
      const response = await this.useCase.updatePost.execute();
      //console.log(res);
      fs.unlink("public/post_images/main/" + req.file.filename, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  }
}
