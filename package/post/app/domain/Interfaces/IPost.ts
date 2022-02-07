import PostImage from "../entities/PostImage";

export interface IPost {
  _id: String;
  title: String;
  owner_id: String; // user id of owner
  subtitle: String;
  image: String;
  images: PostImage[];
  publish_date: Date;
  tags: String[];
  priority: Boolean;
  starred: Boolean;
  deleted: Boolean;
  text: String;
  slug: String;
  approved: Boolean;
}
