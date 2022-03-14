import Command from "../command";
import config from "../../../config";

export class GetPostsHealth extends Command {
  constructor() {
    super();
  }

  //  Override Method
  public async execute() {
    const response = `🛡️  Posts is ok on port: ${config.port} 🛡️`;
    return response;
  }
}
