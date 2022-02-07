import mongoose from "mongoose";
import { IPostImage } from "../../domain/Interfaces/IPostImage";
const Schema = mongoose.Schema;

const PostImageSchema = new Schema(
  {
    imageName: {
      type: String,
      default: "",
      required: [true],
    },
    imageUrl: {
      type: String,
      default: "",
      required: [true],
    },
  },
  {
    timestamps: true,
  }
);

//User constant represents the entire collection of data
export default mongoose.model<IPostImage & mongoose.Document>(
  "PostImage",
  PostImageSchema
);
