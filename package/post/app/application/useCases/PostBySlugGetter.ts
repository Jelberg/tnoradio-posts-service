import { PostRepository } from "../../domain/services/Post.service.repository";
import Command from "../command";

export class GetPostBySlug extends Command {
  private _repository: PostRepository;
  private _slug: String;

  constructor(repository: PostRepository) {
    super();
    this._repository = repository;
  }

  public createPostSlug(_slug: String) {
    this._slug = _slug;
  }

  public getSlug() {
    return this._slug;
  }
  //  Override Method
  async execute() {
    const response = await this._repository.getPostBySlug(this.getSlug());
    return response;
  }
}
