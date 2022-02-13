import PostImage from "./PostImage";

export default class DomainPost {
  _id: String;
  title: String;
  owner_id: String; // user id of owner
  subtitle: String;
  summary: String;
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

  constructor(
    _id: String,
    title: String,
    owner_id: String, // user id of owner
    subtitle: String,
    summary: String,
    image: String,
    images: PostImage[],
    publish_date: Date,
    tags: String[],
    priority: Boolean,
    starred: Boolean,
    deleted: Boolean,
    text: String,
    slug: String,
    approved: Boolean
  ) {
    this._id = _id;
    this.title = title;
    this.subtitle = subtitle;
    this.summary = summary;
    this.owner_id = owner_id;
    this.publish_date = publish_date;
    this.image = image;
    this.images = images;
    this.text = text;
    this.tags = tags;
    this.priority = priority;
    this.images = images;
    this.starred = starred;
    this.deleted = deleted;
    this.approved = approved;
    this.slug = slug;
  }

  static create(
    _id: String,
    title: String,
    owner_id: String, // user id of owner
    subtitle: String,
    summary: String,
    image: String,
    images: PostImage[],
    publish_date: Date,
    tags: String[],
    priority: Boolean,
    starred: Boolean,
    deleted: Boolean,
    text: String,
    slug: String,
    approved: Boolean
  ) {
    return new DomainPost(
      _id,
      title,
      owner_id,
      subtitle,
      summary,
      image,
      images,
      publish_date,
      tags,
      priority,
      starred,
      deleted,
      text,
      slug,
      approved
    );
  }
}
