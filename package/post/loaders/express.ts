// API routes
import routes from "../bootstrap/Post.express.routes";

import cors from "cors";
import bodyParser from "body-parser";
import handleErrors from "../middlewares/handleErrors.js";
import BadRequest from "../utils/errors.js";

export default async ({ app }) => {
  /**
   * Once the petition is received it
   * will be parsed into a Json object.
   */
  app.use(bodyParser.json());

  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(
    cors({
      origin: "*",
    })
  );

  /**
   * Calling Post services.
   */
  //PostRoutes(app);

  /**
   * SERVERS
   */
  app.use(routes);

  /**
   * Middleware. Handles errors.
   *
  app.use((err, req, res, next) => {
      res.status(400).send({
          errorMessage: err.message,
          errorName: err.name,
          errorCode: err.code,
        //  err: err
      });
    console.log(err);
  });*/

  app.use(handleErrors);
};
