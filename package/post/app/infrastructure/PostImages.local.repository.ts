import { PostImageRepository } from "../domain/services/Post.images.repository";

export class PostImagesLocalRepository implements PostImageRepository {
  getPostImage(imageName, options, res) {
    try {
      return res.sendFile(imageName, options, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Sent:", imageName);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
}
