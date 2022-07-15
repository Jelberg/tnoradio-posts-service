import DomainTag from "../../domain/entities/Tag";
import Command from "../command";
import { PostRepository } from "../../domain/services/Post.service.repository";

export class TagCreator extends Command {
  private _repository: PostRepository;
  private _tag: DomainTag;

  constructor(_repository: PostRepository) {
    super();
    this._repository = _repository;
  }

  public CreateTag(_tag: DomainTag) {
    this._tag = _tag;
  }

  public getTag() {
    return this._tag;
  }

  //  Override Method
  public async execute() {
    const response = await this._repository.saveTag(this._tag);
    return response;
  }
}
