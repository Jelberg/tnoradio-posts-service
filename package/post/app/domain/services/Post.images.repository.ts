export interface PostImageRepository {
  getPostImage(imageName, options, res): any;
  listDriveFiles();
  generatePublicUrl(fileId);
  deleteFile(fileId);
  uploadFile(name, mimeType, filePath);
}
