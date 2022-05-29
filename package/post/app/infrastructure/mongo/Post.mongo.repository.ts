import Post from "./Post.schema";
import Tag from "./Tag.schema";
import DomainPost from "../../domain/entities/Post";
import DomainTag from "../../domain/entities/Tag";
import { PostRepository } from "../../domain/services/Post.service.repository";
import _ from "lodash";
import PostImage from "../../domain/entities/PostImage";
import Image from "./PostImage.schema";

export class PostMongoRepository implements PostRepository {
  async update(post: DomainPost, id: string): Promise<Error | DomainPost> {
    try {
      const result = await Post.findByIdAndUpdate({ _id: id }, post, {
        runValidators: true,
      });
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
    try {
      const response = await Post.create(post);
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  async saveTag(tag: DomainTag): Promise<DomainTag> {
    try {
      const response = await Tag.create(tag);
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async getAll(): Promise<Error | DomainPost[]> {
    try {
      return Post.find().sort({ createdAt: -1 });
    } catch (err) {
      return err;
    }
  }

  async getPostsPage(
    pageSize: number,
    page: number
  ): Promise<Error | DomainPost[]> {
    try {
      return Post.find()
        .sort({ createdAt: -1 })
        .limit(pageSize)
        .skip(pageSize * page);
    } catch (err) {
      return err;
    }
  }

  async getAllTags(): Promise<Error | DomainTag[]> {
    try {
      return Tag.find();
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
