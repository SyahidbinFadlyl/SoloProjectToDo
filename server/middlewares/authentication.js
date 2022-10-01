const { User } = require("../models");
const { verifyToken } = require("../helpers/jwt");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;

    if (!access_token) {
      throw { name: "Unauthorized" };
    }
    const payload = verifyToken(access_token);
    const { id } = payload;
    const currentUser = await User.findByPk(id);

    if (!payload && !currentUser) {
      throw { name: "Unauthorized" };
    }

    req.user = {
      id: currentUser.id,
    };

    next();
  } catch (error) {
    next(error);
  }

};

module.exports = { authentication };
