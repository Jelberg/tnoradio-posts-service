import { PostRepository } from "../../domain/services/Post.service.repository";
import Command from "../command";

/**
 * Gets user image from database.
 */
export class ImageDBGetter extends Command {
  private _repository: PostRepository;
  private name: String;
  private slug: String;

  constructor(repository: PostRepository) {
    super();
    this._repository = repository;
  }

  public setImageName(name: String) {
    this.name = name;
  }

  public setImageSlug(slug: String) {
    this.slug = slug;
  }

  public getName() {
    return this.name;
  }

  public getSlug() {
    return this.slug;
  }
  //  Override Method
  async execute() {
    const response = await this._repository.getPostImage(
      this.getName(),
      this.getSlug()
    );
    return response;
  }
}
