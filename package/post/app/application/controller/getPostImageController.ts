import e from "express";
import { ImageGetter } from "../useCases/ImageGetter";

export interface UseCase {
  getPostImage: ImageGetter;
}

export class GetPostImageController {
  constructor(private useCase: UseCase) {}

  async handle(req: e.Request, res: e.Response) {
    //console.log("SHOW IMAGE CONTROLLER");
    console.log(req.params);

    try {
      var options = {
        root: "public/post_images/" + req.params.type,
        dotfiles: "deny",
        headers: {
          "x-timestamp": Date.now(),
          "x-sent": true,
        },
      };

      this.useCase.getPostImage.setImageName(req.params.name);
      this.useCase.getPostImage.setOptions(options);
      this.useCase.getPostImage.setResponse(res);

      const response = this.useCase.getPostImage.execute();

      return response;
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  }
}
