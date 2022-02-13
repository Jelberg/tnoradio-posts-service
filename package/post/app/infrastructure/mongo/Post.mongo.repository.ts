import Post from "./Post.schema";
import DomainPost from "../../domain/entities/Post";
import { PostRepository } from "../../domain/services/Post.service.repository";
import _ from "lodash";
import PostImage from "../../domain/entities/PostImage";
import Image from "./PostImage.schema";

export class PostMongoRepository implements PostRepository {
  async update(post: DomainPost, id: string): Promise<Error | DomainPost> {
    console.log("MONGO", post);
    console.log("ID", id);
    try {
      const result = await Post.findByIdAndUpdate(
        { _id: id },
        post,
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
      return post;
    } catch (err) {
      let errorObject = JSON.parse(JSON.stringify(err));
      console.log("ERR IN CATCH ", errorObject);
      throw err;
    }
  }

  /**
   * Function changes Post status to removed setting
   * deleted field true
   * @param postId ID from Post
   */
  async delete(_id: String): Promise<DomainPost | Error> {
    try {
      const deletedPost = await Post.findByIdAndUpdate(
        { _id: _id },
        { deleted: true }
      );
      return deletedPost;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async save(post: DomainPost): Promise<DomainPost> {
    console.log("create");
    console.log(post);
    try {
      const response = await Post.create(post);
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
      const post = await Post.findOne({ _id: _id });
      if (post === null) return null;
      else return post;
    } catch (err) {
      return err;
    }
  }

  async getPostBySlug(_slug: String): Promise<DomainPost> {
    try {
      const post = await Post.findOne({ slug: _slug });
      if (post === null) return null;
      else return post;
    } catch (err) {
      return err;
    }
  }

  async destroy(postId: String): Promise<any | Error> {
    try {
      //console.log(PostId);
      return await Post.findByIdAndRemove({ _id: postId });
    } catch (err) {
      return err;
    }
  }
  async getPostImage(name: String, slug: String): Promise<PostImage> {
    try {
      const image = await Image.findOne({ imageName: name, imageUrl: slug });
      if (image == null) return null;
      else return image;
    } catch (err) {
      return err;
    }
  }

  async savePostImage(image): Promise<PostImage> {
    try {
      const res = await Image.create(image);
      if (image == null) return null;
      else return res;
    } catch (err) {
      return err;
    }
  }

  async updatePostImage(image, slug, name): Promise<PostImage> {
    let createResponse;

    console.log(name);
    console.log(slug);

    const updateResponse = await Image.findOneAndUpdate(
      { imageName: name, imageUrl: slug },
      image
    );

    if (updateResponse === null) {
      createResponse = await Image.create(image);
      return createResponse;
    } else return updateResponse;
  }

  async destroyImage(imageUrl: String): Promise<any> {
    try {
      return await Image.findOneAndDelete({ imageUrl: imageUrl });
    } catch (err) {
      return err;
    }
  }
}
