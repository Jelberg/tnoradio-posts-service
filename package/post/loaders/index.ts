import expressLoader from "./express";
import mongooseLoader from "./mongoose";
import logger from "./logger";
import express from "express";
import kafka from "./kafka";
import config from "../config";
import consul from "./consul";
import { PostMongoRepository } from "../app/infrastructure/mongo/Post.mongo.repository";
import { PostRepository } from "../app/domain/services/Post.service.repository";

const PostRepository: PostRepository = new PostMongoRepository();

export const app = express();
//Adds Express Static Middleware
app.use(express.static("public"));

/*kafka.showConsumer.on('message', async function (message) {
    console.log(message);
    getPostById.createPostId(message.value.toString());
    var Post = await getPostById.execute();
    //console.log(Post);
    /*var res = {
        Post:Post,
        id:message.key
    }
    kafka.producer.send( [ { topic: "Posts", messages: JSON.stringify(Post), key: Post._id.toString() } ], function (err,data) {} );
});

kafka.showConsumer.on('error', err => {
        console.log("Error en kafka consumer");
        console.log(err);
    }
);
*/
/*kafka.producer.on('ready', function () {

	setInterval(function() {
  		
		}, 5000);


	});*/

export default async () => {
  /**
   * Port loader
   */
  await app.listen(config.port || 9000, () => {
    try {
      /**
       * Consul Register
       */

      //consul.register;
      logger.info(`
        ################################################
        🛡️  Server listening on port: ${config.port} 🛡️ 
        ################################################
      `);
    } catch (err) {
      logger.error(err);
      process.exit(1);
    }
  });

  /**
   * MongoDB loader, creates mongoClient and connect to the db and return db connection.
   */
  const mongoConnection = await mongooseLoader();
  logger.info("✌️ DB loaded and connected!");

  /**
   * Laods express essentials
   */
  await expressLoader({ app });
  logger.log("info", "Express Loader has initalized successfully! ✅");
};
