//BOOTSTRAP PATHS

import { PostMongoRepository } from "../app/infrastructure/mongo/Post.mongo.repository";
import { PostRepository } from "../app/domain/services/Post.service.repository";

import { ReadPost } from "../app/application/useCases/PostReader";
import { GetAllPostsController } from "../app/application/controller/getAllPostsController";

import { TagListGetter } from "../app/application/useCases/TagListGetter.uc";
import { GetAllTagsController } from "../app/application/controller/getAllTagsController";

import { CreatePostController } from "../app/application/controller/createPostController";
import { PostCreator } from "../app/application/useCases/PostCreator";

import { CreateTagController } from "../app/application/controller/createTagController";
import { TagCreator } from "../app/application/useCases/TagCreator.uc";

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

import { UploadImageController } from "../app/application/controller/uploadImage.controller";
import { UploadImage } from "../app/application/useCases/UploadImage.uc";

import { GetPostBySlug } from "../app/application/useCases/PostBySlugGetter";
import { GetPostBySlugController } from "../app/application/controller/getPostBySlugController";

import { GetImageFromDBController } from "../app/application/controller/getImageFromDBController";
import { UpdateImageInDBController } from "../app/application/controller/updateImageInDBController";
import { UploadImageToDBController } from "../app/application/controller/uploadImageToDBController";
import { ImageDBGetter } from "../app/application/useCases/ImageDBGetter.uc";
import { UploadImageToDatabase } from "../app/application/useCases/UploadImageToBD.uc";
import { UpdateImageInDB } from "../app/application/useCases/UpdateImageInDB.uc";
import { GoogleRepository } from "../app/infrastructure/google/PostImages.google.repository";

// BOOTSTRAP SERVICES
/**
 * Aquí se decide cuál implementación de las
 * diferentes infraestructuras se va a utilizar.
 */
const PostRepository: PostRepository = new PostMongoRepository();

const PostImageRepository: PostImageRepository =
  new PostImagesLocalRepository();

const PostGoogleRepository: PostImageRepository = new GoogleRepository();

// BOOTSTRAP COMMANDS  (Use CASE)
const getAllPosts = new ReadPost(PostRepository);
const createPost = new PostCreator(PostRepository);
const getAllTags = new TagListGetter(PostRepository);
const createTag = new TagCreator(PostRepository);
const getPostById = new GetPostById(PostRepository);
const getPostBySlug = new GetPostBySlug(PostRepository);
const updatePost = new UpdatePost(PostRepository);
const destroyPost = new DestroyPost(PostRepository);
const deletePost = new DeletePost(PostRepository);
const getPostsHealth = new GetPostsHealth();
const getPostImage = new ImageGetter(PostImageRepository);
const uploadImage = new UploadImage(PostGoogleRepository);
const uploadImageToDb = new UploadImageToDatabase(PostRepository);
const imageFromDbGetter = new ImageDBGetter(PostRepository);
const updateImageInDB = new UpdateImageInDB(PostRepository);

// BOOTSTRAP CONTROLLERS
const getAllPostsController = new GetAllPostsController({ getAllPosts });
const createPostController = new CreatePostController({ createPost });
const getAllTagsController = new GetAllTagsController({ getAllTags });
const createTagController = new CreateTagController({ createTag });
const getPostByIdController = new GetPostByIdController({ getPostById });
const getPostBySlugController = new GetPostBySlugController({ getPostBySlug });
const updatePostController = new UpdatePostController({ updatePost });
const destroyPostController = new DestroyPostController({ destroyPost });
const deletePostController = new DeletePostController({ deletePost });
const postsHealthController = new HealthController({ getPostsHealth });
const postImageController = new GetPostImageController({ getPostImage });
const uploadImageController = new UploadImageController({ uploadImage });
const uploadImageToDbController = new UploadImageToDBController({
  uploadImageToDb,
});
const getImageFromDBController = new GetImageFromDBController({
  imageFromDbGetter,
});
const updateImageInDBController = new UpdateImageInDBController({
  updateImageInDB,
});

export {
  getAllPostsController,
  createPostController,
  getAllTagsController,
  createTagController,
  getPostByIdController,
  updatePostController,
  destroyPostController,
  deletePostController,
  postsHealthController,
  postImageController,
  uploadImageController,
  getPostBySlugController,
  uploadImageToDbController,
  getImageFromDBController,
  updateImageInDBController,
};
