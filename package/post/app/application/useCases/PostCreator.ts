import DomainPost from "../../domain/entities/Post";
import Command from "../command";
import { PostRepository } from "../../domain/services/Post.service.repository";

export class PostCreator extends Command {
  private _repository: PostRepository;
  private _Post: DomainPost;

  constructor(_repository: PostRepository) {
    super();
    this._repository = _repository;
  }

  public CreatePost(Post: DomainPost) {
    this._Post = Post;
  }

  public getPost() {
    return this._Post;
  }

  //  Override Method
  public async execute() {
    const response = await this._repository.save(this._Post);
    return response;
  }
}
