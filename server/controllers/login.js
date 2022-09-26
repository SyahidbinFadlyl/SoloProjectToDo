const { hashPassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");
class Login {
    static async login(req, res, next) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                const msg = [];
                if (!email) {
                    msg.push("Email Required");
                }
                if (!password) {
                    msg.push("Password Required");
                }
                throw { name: "InvalidInput", message: msg };
            }

            const findUser = await User.findOne({
                where: {
                    email
                }
            });

            if (!findUser) {
                throw { name: "invalid email/password" };
            }

            const checkPassword = hashPassword(password, findUser.password);
            if (!checkPassword) {
                throw { name: "invalid email/password" };
            }

            const payload = {
                id: findUser.id
            };

            const access_token = createToken(payload);

            res.status(200).json({
                access_token,
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Login;