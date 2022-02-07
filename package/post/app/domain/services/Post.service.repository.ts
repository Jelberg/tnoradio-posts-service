import DomainPost from "../entities/Post";

export interface PostRepository {
  save(Post: DomainPost): Promise<DomainPost | Error>;
  getPostById(_id: String): Promise<DomainPost>;
  getPostBySlug(_slug: String): Promise<DomainPost>;
  getAll(): Promise<DomainPost[] | Error>;
  update(Post: DomainPost, id?: String): Promise<DomainPost | Error>;
  destroy(PostId: String): Promise<any | Error>;
  delete(PostId: String): Promise<DomainPost | Error>;
}
