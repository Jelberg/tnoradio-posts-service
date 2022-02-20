import UserModel from "../../domain/entities/User";
import Command from "../command";
import { UserRepository } from "../../domain/services/user.service.repository";
import UserImage from "../../domain/entities/UserImage";

/**
 * Uploads image to database.
 */
export class UpdateImageInDB extends Command {
  private _repository: UserRepository;
  private image: UserImage;
  private slug: String;
  private name: String;

  constructor(_repository: UserRepository) {
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
