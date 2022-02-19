import mongoose from "mongoose";
import { ITag } from "../../domain/Interfaces/ITag";
//import uniqueValidator from "mongoose-unique-validator";
const Schema = mongoose.Schema;

const TagSchema = new Schema(
  {
    tag: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//Post constant represents the entire collection of data
export default mongoose.model<ITag & mongoose.Document>("Tag", TagSchema);
