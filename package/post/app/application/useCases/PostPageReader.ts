import Command from "../command";
import { PostRepository } from "../../domain/services/Post.service.repository";

export class ReadPostPage extends Command {
  private _repository: PostRepository;
  private _typeReading: String;
  private _page: number;
  private _pageSize: number;

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

  public getPage() {
    return this._page;
  }

  //  Override Method
  async execute() {
    const response = await this._repository.getPostsPage(
      this.getPageSize(),
      this.getPage()
    );
    return response;
  }
}
