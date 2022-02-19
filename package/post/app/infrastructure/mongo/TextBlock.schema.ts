import mongoose from "mongoose";
import { ITextBlock } from "../../domain/Interfaces/ITextBlock";
//import uniqueValidator from "mongoose-unique-validator";
const Schema = mongoose.Schema;

const InlineStyleRangeSchema = new Schema({
  length: {
    type: Number,
  },
  offset: {
    type: Number,
  },
  style: {
    type: String,
  },
});

const TextBlockSchema = new Schema(
  {
    data: {
      type: Object,
    },
    depth: {
      type: Number,
    },
    entityRanges: {
      type: Array,
    },
    inlineStyleRanges: {
      type: [InlineStyleRangeSchema],
    },
    key: {
      type: String,
    },
    text: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  {
    timestamps: false,
  }
);

//Post constant represents the entire collection of data
export default mongoose.model<ITextBlock & mongoose.Document>(
  "ITextBlock",
  TextBlockSchema
);
