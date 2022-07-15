import e from "express";
import DomainPost from "../../domain/entities/Post";
import { GetPostById } from "../useCases/PostByIdGetter";
import { UpdatePost } from "../useCases/PostUpdater";
import { UploadImage } from "../useCases/UploadImage.uc";
var fs = require("fs");
var path = require("path");

interface UseCase {
  uploadImage: UploadImage;
  updatePost: UpdatePost;
  getPost: GetPostById;
}
let post: DomainPost;

export class UploadImageController {
  constructor(private useCase: UseCase) {}

  async handle(req: any, res: e.Response) {
    try {
      this.useCase.updatePost.setId(req.body.owner);
      this.useCase.getPost.createPostId(req.body.owner);
      this.useCase.uploadImage.setMimeType("image/jpeg");
      this.useCase.uploadImage.setName(req.file.filename);
      this.useCase.uploadImage.setPath(
        "public/post_images/main/" + req.file.filename
      );

      const imageUrl = await this.useCase.uploadImage.execute();
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
