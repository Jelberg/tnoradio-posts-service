import DomainPost from "../../domain/entities/Post";
import Command from "../command";
import { PostRepository } from "../../domain/services/Post.service.repository";

export class PostCreator extends Command {
  private _repository: PostRepository;
  private _post: DomainPost;

  constructor(_repository: PostRepository) {
    super();
    this._repository = _repository;
  }

  public createPost(post: DomainPost) {
    this._post = post;
  }

  public getPost() {
    return this._post;
  }

  //  Override Method
  public async execute() {
    const response = await this._repository.save(this._post);
    return response;
  }
}
