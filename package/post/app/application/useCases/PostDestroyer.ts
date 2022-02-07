import Command from "../command";
import { PostRepository } from "../../domain/services/Post.service.repository";

/**
 * Destroy <> Delete
 */
export class DestroyPost extends Command {
  private _repository: PostRepository;
  private _PostId: String;

  constructor(_repository: PostRepository) {
    super();
    this._repository = _repository;
  }

  public setPostId(PostId) {
    //console.log(PostId);
    this._PostId = PostId;
  }

  public getPostId() {
    return this._PostId;
  }

  public async execute() {
    const response = await this._repository.destroy(this.getPostId());
    return response;
  }
}
