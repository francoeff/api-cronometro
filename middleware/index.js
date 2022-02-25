const createError = require('http-errors');
require('dotenv').config();
const {NODE_ENV, CLAVE_SECRETA} = process.env;

module.exports.error404Handler = (req, res, next) => {
    next(createError(404));
};

// eslint-disable-next-line
module.exports.errorHandler = (err, req, res, _next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = NODE_ENV === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send({ message: err.message });
};
