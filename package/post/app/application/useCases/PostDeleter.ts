import { PostRepository } from "../../domain/services/Post.service.repository";
import Command from "../command";

export class DeletePost extends Command {
  private _repository: PostRepository;
  private _id: String;

  constructor(repository: PostRepository) {
    super();
    this._repository = repository;
  }

  public setId(id: String) {
    this._id = id;
  }

  //  Override Method
  public async execute() {
    const response = await this._repository.delete(this._id);
    return response;
  }
}
