function errorHandler(error, req, res, next) {
    console.log(error.name);
}

module.exports = errorHandler;