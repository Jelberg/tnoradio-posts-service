export default class PostImage {
  _id: String;
  imageName: String;
  imageUrl: String;

  constructor(_id: String, imageName: String, imageUrl: String) {
    this._id = _id;
    this.imageName = imageName;
    this.imageUrl = imageUrl;
  }

  static create(_id: String, imageName: String, imageUrl: String) {
    return new PostImage(_id, imageName, imageUrl);
  }
}
