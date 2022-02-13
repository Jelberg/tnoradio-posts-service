import Post from "./Post.schema";
import DomainPost from "../../domain/entities/Post";
import { PostRepository } from "../../domain/services/Post.service.repository";
import _ from "lodash";
export class PostMongoRepository implements PostRepository {
  async update(Post: DomainPost, id: string): Promise<Error | DomainPost> {
    console.log("MONGO", Post);
    console.log("ID", id);
    try {
      const result = await Post.findByIdAndUpdate(
        { _id: id },
        Post,
        { runValidators: true },
        function (err) {
          console.log("ERR IN UPDATE ", err);
          return err;
        }
      );

      console.log("Post_UPDATED", result);

      //get current information from the Post's database
      // let PostUpdated = await this.getPostByEmail(Post.email);

      //insert table Post history
      // const PostHistory = await this.insertFromHistoryPost(Post);

      //console.log("Post_HSTORE", PostHistory);
      return Post;
    } catch (err) {
      let errorObject = JSON.parse(JSON.stringify(err));
      console.log("ERR IN CATCH ", errorObject);
      throw err;
    }
  }

  /**
   * Function changes Post status to removed setting
   * deleted field true
   * @param PostId ID from Post
   */
  async delete(_id: String): Promise<DomainPost | Error> {
    try {
      const deletedPost = await Post.findByIdAndUpdate(
        { _id: _id },
        { deleted: true }
      );

      console.log(deletedPost);
      return deletedPost;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async save(DPost: DomainPost): Promise<DomainPost> {
    console.log("create");
    console.log(Post);
    try {
      const response = await Post.create(DPost);
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async getAll(): Promise<Error | DomainPost[]> {
    try {
      return Post.find();
    } catch (err) {
      return err;
    }
  }

  async getPostById(_id: String): Promise<DomainPost> {
    try {
      const LPost = await Post.findOne({ _id: _id });
      if (LPost === null) return null;
      else return LPost;
    } catch (err) {
      return err;
    }
  }

  async getPostBySlug(_slug: String): Promise<DomainPost> {
    try {
      const LPost = await Post.findOne({ slug: _slug });
      if (LPost === null) return null;
      else return LPost;
    } catch (err) {
      return err;
    }
  }

  async destroy(PostId: String): Promise<any | Error> {
    try {
      //console.log(PostId);
      return await Post.findByIdAndRemove({ _id: PostId });
    } catch (err) {
      return err;
    }
  }
}
