import Command from "../command";
import { PostImageRepository } from "../../domain/services/Post.images.repository";
import e from "express";

export class ImageGetter extends Command {
  private _repository: PostImageRepository;
  public options: {};
  public imageName: string;
  public res: e.Response;

  constructor(_repository: PostImageRepository) {
    super();
    this._repository = _repository;
  }

  public setOptions(options) {
    this.options = options;
  }

  public setImageName(imageName) {
    this.imageName = imageName;
  }

  public setResponse(res) {
    this.res = res;
  }

  public getOptions() {
    return this.options;
  }

  public getImageName() {
    return this.imageName;
  }

  public getResponse() {
    return this.res;
  }

  //  Override Method
  public async execute() {
    const response = await this._repository.getPostImage(
      this.imageName,
      this.options,
      this.res
    );
    return response;
  }
}
