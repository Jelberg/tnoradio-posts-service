import mongoose from "mongoose";
import { IPost } from "../../domain/Interfaces/IPost";
import PostImageSchema from "./PostImage.schema";
//import uniqueValidator from "mongoose-unique-validator";
const Schema = mongoose.Schema;
const PostSchema = new Schema(
  {
    title: {
      type: String,
    },
    owner_id: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    summary: {
      type: String,
    },
    image: {
      type: String,
    },
    images: {
      type: [PostImageSchema.schema],
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    publish_date: {
      type: Date,
    },
    priority: {
      type: Boolean,
    },
    tags: {
      type: [String],
    },
    text: {
      type: String,
    },
    slug: {
      type: String,
    },
    starred: {
      type: Boolean,
    },
    approved: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

//Post constant represents the entire collection of data
export default mongoose.model<IPost & mongoose.Document>("Post", PostSchema);
