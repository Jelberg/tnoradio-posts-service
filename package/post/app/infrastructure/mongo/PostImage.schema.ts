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
    file: {
      data: Buffer,
      contentType: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  {
    timestamps: true,
  }
);

//User constant represents the entire collection of data
export default mongoose.model<IPostImage & mongoose.Document>(
  "postImage",
  PostImageSchema
);
