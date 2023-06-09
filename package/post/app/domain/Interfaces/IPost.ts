import { ITextBlock } from "./ITextBlock";
import PostImage from "../entities/PostImage";

export interface IPost {
  _id: String;
  title: String;
  owner_id: String; // user id of owner
  subtitle: String;
  summary: String;
  image: String;
  images: PostImage[];
  publish_date: Date;
  tags: String[];
  starred: Boolean;
  deleted: Boolean;
  text: { blocks: ITextBlock[]; entityMap: {} };
  slug: String;
  approved: Boolean;
}
