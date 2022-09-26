
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

        } catch (error) {
            next(error);
        }
    }
}