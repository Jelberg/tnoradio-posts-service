import PostModel from "../../domain/entities/Post";
import Command from "../command";
import { PostRepository } from "../../domain/services/Post.service.repository";
import PostImage from "../../domain/entities/PostImage";

/**
 * Uploads image to database.
 */
export class UpdateImageInDB extends Command {
  private _repository: PostRepository;
  private image: PostImage;
  private slug: String;
  private name: String;

  constructor(_repository: PostRepository) {
    super();
    this._repository = _repository;
  }

  public SetImage(image) {
    this.image = image;
  }

  public SetName(name: String) {
    this.name = name;
  }

  public SetSlug(slug: String) {
    this.slug = slug;
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

  //  Override Method
  public async execute() {
    const response = await this._repository.updatePostImage(
      this.image,
      this.slug,
      this.name
    );
    return response;
  }
}
