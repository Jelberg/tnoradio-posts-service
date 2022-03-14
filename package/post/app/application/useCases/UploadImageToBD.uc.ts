import PostModel from "../../domain/entities/Post";
import Command from "../command";
import { PostRepository } from "../../domain/services/Post.service.repository";
import PostImage from "../../domain/entities/PostImage";

/**
 * Uploads image to database.
 */
export class UploadImageToDatabase extends Command {
  private _repository: PostRepository;
  private image: PostImage;

  constructor(_repository: PostRepository) {
    super();
    this._repository = _repository;
  }

  public SetImage(image: PostImage) {
    this.image = image;
  }

  public getImage() {
    return this.image;
  }

  //  Override Method
  public async execute() {
    const response = await this._repository.savePostImage(this.image);
    return response;
  }
}
