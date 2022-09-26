const { User } = require("../models");
class Register {
    static async register(req, res, next) {
        try {
            const { name, email, password } = req.body;
            const payload = {
                name,
                email,
                password,
            };
            const createUser = await User.create(payload);

            res.status(201).json({
                message: "Success create user",
                email: createUser.email
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Register;