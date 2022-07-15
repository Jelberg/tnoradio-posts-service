//import { Show } from '../../domain/entities/Show';
import Command from "../command";
import { PostImageRepository } from "../../domain/services/Post.images.repository";

export class UploadImage extends Command {
  private _repository: PostImageRepository;
  private name: String;
  private mimeType: String;
  private path: String;

  constructor(_repository: PostImageRepository) {
    super();
    this._repository = _repository;
  }

  public setName(name) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }
  public setMimeType(mimeType: String) {
    this.mimeType = mimeType;
  }

  public getMimeTyoe() {
    return this.mimeType;
  }
  public setPath(path) {
    this.path = path;
  }

  public getPath() {
    return this.path;
  }

  //  Override Method
  public async execute() {
    const response = await this._repository.uploadFile(
      this.getName(),
      this.getMimeTyoe(),
      this.getPath()
    );
    return response;
  }
}
