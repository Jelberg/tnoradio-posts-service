export default class PostImage {
  _id: String;
  imageName: String;
  imageUrl: String;
  file: {
    data: Buffer;
    contentType: String;
  };
  owner: String;

  constructor(
    _id: String,
    imageName: String,
    imageUrl: String,
    file: { data: Buffer; contentType: String },
    owner: String
  ) {
    this._id = _id;
    this.imageName = imageName;
    this.imageUrl = imageUrl;
    this.file = file;
    this.owner = owner;
  }

  static create(
    _id: String,
    imageName: String,
    imageUrl: String,
    file: { data: Buffer; contentType: String },
    owner: String
  ) {
    return new PostImage(_id, imageName, imageUrl, file, owner);
  }
}
