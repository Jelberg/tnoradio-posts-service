import { PostRepository } from "../../domain/services/Post.service.repository";
import DomainPost from "../../domain/entities/Post";
import Command from "../command";

export class UpdatePost extends Command {
  private _repository: PostRepository;
  private _id: String;
  private _Post: DomainPost;

  constructor(repository: PostRepository) {
    super();
    this._repository = repository;
  }

  public setId(id: String) {
    this._id = id;
  }

  public setDomainPost(Post: DomainPost) {
    this._Post = Post;
  }

  //  Override Method
  public async execute() {
    const response = await this._repository.update(this._Post, this._id);
    return response;
  }
}
