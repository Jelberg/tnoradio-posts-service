import { ReadPost } from "../../../../../packagePost/app/application/useCases/PostReader";
jest.mock("../../../../../packagePost/app/application/usecases/PostsRead");

import { GetAllPostsController } from "../../../../../packagePost/app/application/controller/getAllPostsController";
jest.mock(
  "../../../../../packagePost/app/application/controller/getAllPostsController"
);

import mock from "../../../../../packagePost/app/application/controller/__mock__/getAllPosts.request.mock";
import { Express } from "express";

const _PostsRead = <jest.Mock<ReadPost>>ReadPost;
const _getAllPostsController = <jest.Mock<GetAllPostsController>>(
  GetAllPostsController
);

describe("Controller : Posts Read", () => {
  beforeEach(() => {
    let called = new _getAllPostsController(_PostsRead);
  });

  test("Called to constructor times", () => {
    expect(_getAllPostsController).toHaveBeenCalledTimes(1);
  });

  /* test('Async handler function', () => {
        let controller = new _getAllPostsController(_PostsRead);
        let status = controller.handle(mock.mockRequest, mock.mockResponse);
        expect(status).not.toBeUndefined();

    });*/
});
