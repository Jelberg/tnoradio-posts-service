import PostModel from "../../domain/entities/Post";
import Command from "../command";
import { PostImageRepository } from "../../domain/services/Post.images.repository";
import PostImage from "../../domain/entities/PostImage";

/**
 * Uploads image to database.
 */
export class UpdateImage extends Command {
  private _repository: PostImageRepository;
  private image: PostImage;
  private slug: String;
  private name: String;
  private fileId: String;
  private mimeType: String;
  private path: String;

  constructor(_repository: PostImageRepository) {
    super();
    this._repository = _repository;
  }

  public setImage(image) {
    this.image = image;
  }

  public setName(name: String) {
    this.name = name;
  }

  public setSlug(slug: String) {
    this.slug = slug;
  }

  public setFileId(fileId: String) {
    this.fileId = fileId;
  }

  public getImage() {
    return this.image;
  }

  public getName() {
    return this.name;
  }
  public getSlug() {
    return this.slug;
  }

  public getFileId() {
    return this.fileId;
  }

  public setMimeType(mimeType: String) {
    this.mimeType = mimeType;
  }

  public getMimeTyoe() {
    return this.mimeType;
  }
  public setPath(path) {
    this.path = path;
  }

  public getPath() {
    return this.path;
  }

  //  Override Method
  public async execute() {
    const response = await this._repository.updateFile(
      this.getName(),
      this.getMimeTyoe(),
      this.getPath(),
      this.getFileId()
    );
    return response;
  }
}
