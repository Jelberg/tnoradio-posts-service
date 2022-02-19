import Command from "../command";
import { PostRepository } from "../../domain/services/Post.service.repository";

export class TagListGetter extends Command {
  private _repository: PostRepository;
  private _typeReading: String;

  constructor(_repository: PostRepository) {
    super();
    this._repository = _repository;
  }

  public setTypeReading(type: String) {
    this._typeReading = type;
  }

  public getTypeReading() {
    return this._typeReading;
  }

  //  Override Method
  async execute() {
    const response = await this._repository.getAllTags();
    return response;
  }
}
