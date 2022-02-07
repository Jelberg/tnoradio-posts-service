import mongoose from "mongoose";
import Logger from './logger';
import config from '../config';


var MONGO_URL;

export default async () => {
    mongoose.Promise = global.Promise;

    //So we wont use deprecated methods.
    mongoose.set('useFindAndModify', false);
    mongoose.set('useUnifiedTopology', true);
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useCreateIndex', true);

    if (process.env.NODE_ENV === "development") {
        MONGO_URL = config.databaseURL;
    } else {
        MONGO_URL = config.databaseURL;
    }

    mongoose.connect(MONGO_URL).then(
        () => {
            Logger.info("BD: " + MONGO_URL)
        },
        (err) => {
            Logger.error("Something went wrong connecting to the database!");
            Logger.error("BD: " + MONGO_URL)
            Logger.error(err);
        }
    );

};
