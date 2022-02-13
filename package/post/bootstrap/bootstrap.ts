//BOOTSTRAP PATHS

import { PostMongoRepository } from "../app/infrastructure/mongo/Post.mongo.repository";
import { PostRepository } from "../app/domain/services/Post.service.repository";

import { ReadPost } from "../app/application/useCases/PostReader";
import { GetAllPostsController } from "../app/application/controller/getAllPostsController";

import { CreatePostController } from "../app/application/controller/createPostController";
import { PostCreator } from "../app/application/useCases/PostCreator";

import { UpdatePostController } from "../app/application/controller/updatePostController";
import { UpdatePost } from "../app/application/useCases/PostUpdater";

import { GetPostByIdController } from "../app/application/controller/getPostByIdController";
import { GetPostById } from "../app/application/useCases/PostByIdGetter";

import { DestroyPostController } from "../app/application/controller/destroyPostController";
import { DestroyPost } from "../app/application/useCases/PostDestroyer";

import { DeletePostController } from "../app/application/controller/deletePostController";
import { DeletePost } from "../app/application/useCases/PostDeleter";

import { GetPostImageController } from "../app/application/controller/getPostImageController";
import { ImageGetter } from "../app/application/useCases/ImageGetter";

import { HealthController } from "../app/application/controller/health.controller";
import { GetPostsHealth } from "../app/application/useCases/PostsHealthGetter.uc";
import { PostImagesLocalRepository } from "../app/infrastructure/PostImages.local.repository";
import { PostImageRepository } from "../app/domain/services/Post.images.repository";
import { UploadImagesController } from "../app/application/controller/uploadImages.controller";
import { UploadImages } from "../app/application/useCases/UploadImages.uc";
import { GetPostBySlug } from "../app/application/useCases/PostBySlugGetter";
import { GetPostBySlugController } from "../app/application/controller/getPostBySlugController";

// BOOTSTRAP SERVICES
/**
 * Aquí se decide cuál implementación de las
 * diferentes infraestructuras se va a utilizar.
 */
const PostRepository: PostRepository = new PostMongoRepository();
const PostImageRepository: PostImageRepository =
  new PostImagesLocalRepository();

// BOOTSTRAP COMMANDS  (Post CASE)
const getAllPosts = new ReadPost(PostRepository);
const createPost = new PostCreator(PostRepository);
const getPostById = new GetPostById(PostRepository);
const getPostBySlug = new GetPostBySlug(PostRepository);
const updatePost = new UpdatePost(PostRepository);
const destroyPost = new DestroyPost(PostRepository);
const deletePost = new DeletePost(PostRepository);
const getPostsHealth = new GetPostsHealth();
const getPostImage = new ImageGetter(PostImageRepository);
const uploadImages = new UploadImages();

// BOOTSTRAP CONTROLLERS
const getAllPostsController = new GetAllPostsController({ getAllPosts });
const createPostController = new CreatePostController({ createPost });
const getPostByIdController = new GetPostByIdController({ getPostById });
const getPostBySlugController = new GetPostBySlugController({ getPostBySlug });
const updatePostController = new UpdatePostController({ updatePost });
const destroyPostController = new DestroyPostController({ destroyPost });
const deletePostController = new DeletePostController({ deletePost });
const PostsHealthController = new HealthController({ getPostsHealth });
const PostImageController = new GetPostImageController({ getPostImage });
const uploadImagesController = new UploadImagesController({ uploadImages });

export {
  getAllPostsController,
  createPostController,
  getPostByIdController,
  updatePostController,
  destroyPostController,
  deletePostController,
  PostsHealthController,
  PostImageController,
  uploadImagesController,
  getPostBySlugController,
};
