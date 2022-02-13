import { ReadPost } from "../../../../../package/Post/app/application/useCases/PostReader";
jest.mock("../../../../../package/Post/app/application/usecases/PostsRead");

import { PostMongoRepository } from "../../../../../package/Post/app/infrastructure/mongo/Post.mongo.repository";
jest.mock(
  "../../../../../package/Post/app/infrastructure/mongo/Post.mongo.repository"
);

//TS needs function typeof<SomeClass> to create mock
const _PostsRead = <jest.Mock<ReadPost>>ReadPost;
const _PostMongoRepository = <jest.Mock<PostMongoRepository>>(
  PostMongoRepository
);

const useCasePostRead = new _PostsRead(new _PostMongoRepository());

describe("Use Case : Posts Read", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    _PostsRead.mockClear();
  });

  it("Check if the consumer called the class constructor", () => {
    let called = new _PostsRead(new _PostMongoRepository());
    expect(_PostsRead).toHaveBeenCalledTimes(1);
  });

  test("Set Type read use case", () => {
    expect(useCasePostRead.getTypeReading()).not.toBeNull();
    expect(useCasePostRead.getTypeReading()).toBeUndefined();
  });
});
