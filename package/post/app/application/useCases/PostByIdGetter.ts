import { PostRepository } from "../../domain/services/Post.service.repository";
import Command from "../command";

export class GetPostById extends Command {
  private _repository: PostRepository;
  private _id: String;

  constructor(repository: PostRepository) {
    super();
    this._repository = repository;
  }

  public createPostId(_id: String) {
    this._id = _id;
  }

  public getPostByIdCreator() {
    return this._id;
  }
  //  Override Method
  async execute() {
    const response = await this._repository.getPostById(this._id);
    return response;
  }
}
