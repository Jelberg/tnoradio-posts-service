export interface IPostImage {
  _id: String;
  imageName: String;
  imageUrl: String;
  file: {
    data: Buffer;
    contentType: String;
  };
  owner: String;
}
