function errorHandler(error, req, res, next) {
    console.log(error);
    if (
        error.name === "SequelizeValidationError" ||
        error.name === "SequelizeUniqueConstraintError"
    ) {
        const errors = error.errors.map((error) => {
            return error.message;
        });
        res.status(400).json({ message: errors });
    } else if (error.name === "invalid email/password") {
        res.status(401).json({ message: "Invalid email/password" });
    } else if (error.name === "Unauthorized" || error.name === "JsonWebTokenError") {
        res.status(401).json({ message: "Invalid token" });
    } else if (error.name === "InvalidInput") {
        res.status(400).json({ message: error.message });
    }
}

module.exports = errorHandler;