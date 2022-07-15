import DomainPost from "../entities/Post";
import DomainTag from "../entities/Tag";
import PostImage from "../entities/PostImage";

export interface PostRepository {
  save(Post: DomainPost): Promise<DomainPost | Error>;
  saveTag(Tag: DomainTag): Promise<DomainTag | Error>;
  getPostById(_id: String): Promise<DomainPost>;
  getPostBySlug(_slug: String): Promise<DomainPost>;
  getAll(): Promise<DomainPost[] | Error>;
  getPostsPage(pageSize: number, page: number): Promise<DomainPost[] | Error>;
  getAllTags(): Promise<DomainTag[] | Error>;
  update(Post: DomainPost, id?: String): Promise<DomainPost | Error>;
  destroy(PostId: String): Promise<any | Error>;
  delete(PostId: String): Promise<DomainPost | Error>;
  getPostImage(name: String, slug: String): Promise<PostImage>;
  savePostImage(image): Promise<PostImage>;
  updatePostImage(image, slug, name): Promise<PostImage>;
}
