import jwtoken from "jsonwebtoken";
import config from "../config";
import User from "../app/domain/entities/Post";

/**
 * Generate token json
 * @param user
 */
async function generateToken(user: User) {
  try {
    //Generate Autentication token
    let token = jwtoken.sign(
      {
        userAcces: user,
      },
      config.jwt_seed,
      { expiresIn: config.jwt_expired_token }
    );

    //retun token
    return {
      ok: true,
      user: user,
      token,
    };
  } catch (err) {
    return err;
  }
}

const jwt = {
  generateToken,
};

export default jwt;
