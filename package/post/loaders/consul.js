var consul = require("consul")();
import config from "../config";

const SERVICE_NAME = "Posts micro service";
const SERVICE_ID = "m_Posts on port: " + config.port;
const SCHEME = "http";
const HOST = "127.0.0.1";
const PORT = config.port;

/* Registro del servicio */
var check = {
  id: SERVICE_ID,
  name: SERVICE_NAME,
  address: HOST,
  port: PORT,
  check: {
    http: SCHEME + "://" + HOST + ":" + PORT + "/health",
    ttl: "5s",
    interval: "5s",
    timeout: "5s",
    deregistercriticalserviceafter: "1m",
  },
};

var register = consul.agent.service.register(check, function (err) {
  if (err) throw err;
});

export default {
  register: register,
};
