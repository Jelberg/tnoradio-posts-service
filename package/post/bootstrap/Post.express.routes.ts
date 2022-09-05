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
  postsHealthController,
  postImageController,
  uploadImageController,
  getPostBySlugController,
  getImageFromDBController,
  uploadImageToDbController,
  updateImageController,
  getAllTagsController,
  createTagController,
  getPostsPageController,
  getPostsPageByOwnerController,
} from "./bootstrap";

var router = express.Router();

router.get(
  "/api/posts/health",
  postsHealthController.handle.bind(postsHealthController)
);
router.get(
  "/api/posts/index",
  getAllPostsController.handle.bind(getAllPostsController)
);
router.get(
  "/api/posts/index/:pagesize/:page",
  getPostsPageController.handle.bind(getPostsPageController)
);
router.get(
  "/api/posts/index/:pagesize/:page/:owner",
  getPostsPageByOwnerController.handle.bind(getPostsPageByOwnerController)
);
router.get(
  "/api/posts/tags/index",
  getAllTagsController.handle.bind(getAllTagsController)
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
  upload.single("image"),
  createPostController.handle.bind(createPostController)
);
router.post(
  "/api/posts/tags/save",
  createTagController.handle.bind(createTagController)
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
  "/api/posts/image",
  postImageController.handle.bind(postImageController)
);
router.post(
  "/api/posts/upload",
  upload.single("image"),
  uploadImageController.handle.bind(uploadImageController)
);
router.post(
  "/api/posts/uploadtodb",
  upload.single("image"),
  uploadImageController.handle.bind(uploadImageController)
);
router.patch(
  "/api/posts/updateimage",
  upload.single("image"),
  updateImageController.handle.bind(updateImageController)
);
router.get(
  "/api/posts/imagefromdb/:name/:slug",
  getImageFromDBController.handle.bind(getImageFromDBController)
);

export default router;
