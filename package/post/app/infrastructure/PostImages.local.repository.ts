import { PostImageRepository } from "../domain/services/Post.images.repository";

export class PostImagesLocalRepository implements PostImageRepository {
  updateFile(name: any, mimeType: any, filePath: any, fileId: any) {
    throw new Error("Method not implemented.");
  }
  listDriveFiles() {
    throw new Error("Method not implemented.");
  }
  generatePublicUrl(fileId: any) {
    throw new Error("Method not implemented.");
  }
  deleteFile(fileId: any) {
    throw new Error("Method not implemented.");
  }
  uploadFile(name: any, mimeType: any, filePath: any) {
    throw new Error("Method not implemented.");
  }
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
