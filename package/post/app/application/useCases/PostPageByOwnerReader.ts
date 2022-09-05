import Command from "../command";
import { PostRepository } from "../../domain/services/Post.service.repository";

export class ReadPostPageByOwner extends Command {
  private _repository: PostRepository;
  private _typeReading: String;
  private _page: number;
  private _pageSize: number;
  private _owner: String;

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
  public setPageSize(pageSize: number) {
    this._pageSize = pageSize;
  }

  public getPageSize() {
    return this._pageSize;
  }
  public setPage(page: number) {
    this._page = page;
  }

  public getOwner() {
    return this._owner;
  }
  public setOwner(owner: String) {
    this._owner = owner;
  }

  public getPage() {
    return this._page;
  }

  //  Override Method
  async execute() {
    const response = await this._repository.getPostsByOwner(
      this.getPageSize(),
      this.getPage(),
      this.getOwner()
    );
    return response;
  }
}
