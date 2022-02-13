/**
 * Routes to Post Service.
 */
import express from "express";
import upload from "./multer";

import {
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
  getImageFromDBController,
  uploadImageToDbController,
  updateImageInDBController,
} from "./bootstrap";

var router = express.Router();

router.get(
  "/api/posts/health",
  PostsHealthController.handle.bind(PostsHealthController)
);
router.get(
  "/api/posts/index",
  getAllPostsController.handle.bind(getAllPostsController)
);
router.get(
  "/api/posts/getpostbyid/:_id",
  getPostByIdController.handle.bind(getPostByIdController)
);
router.get(
  "/api/posts/details/:slug",
  getPostBySlugController.handle.bind(getPostBySlugController)
);
router.post(
  "/api/posts/save",
  createPostController.handle.bind(createPostController)
);
router.patch(
  "/api/posts/update/:_id",
  updatePostController.handle.bind(updatePostController)
);
router.patch(
  "/api/posts/delete/:_id",
  deletePostController.handle.bind(deletePostController)
);
router.delete(
  "/api/posts/destroy/:_id",
  destroyPostController.handle.bind(destroyPostController)
);
router.get(
  "/api/posts/image/:type/:name",
  PostImageController.handle.bind(PostImageController)
);
router.post(
  "/api/posts/upload",
  upload.single("upload"),
  uploadImagesController.handle.bind(uploadImagesController)
);
router.post(
  "/api/posts/uploadtodb",
  upload.single("image"),
  uploadImageToDbController.handle.bind(uploadImageToDbController)
);
router.patch(
  "/api/posts/updateimageindb",
  upload.single("image"),
  updateImageInDBController.handle.bind(updateImageInDBController)
);
router.get(
  "/api/posts/imagefromdb/:name/:slug",
  getImageFromDBController.handle.bind(getImageFromDBController)
);

export default router;
