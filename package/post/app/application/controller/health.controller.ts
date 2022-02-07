import e from "express";
import { GetPostsHealth } from "../useCases/PostsHealthGetter.uc";
import config from "../../../config";

export interface useCase {
  getPostsHealth: GetPostsHealth;
}

/**
 * Always respond ok.
 */
export class HealthController {
  constructor(private useCase: useCase) {}

  async handle(req: e.Request, res: e.Response) {
    const response = `🛡️  Posts is ok on port: ${config.port} 🛡️`;

    try {
      return res.status(200).end(response);
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  }
}
