const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error); // this will be handled by the error handler middleware
}

const errorHandler = (err, req, res, next) => {
    // sometimes the error may not have a status code, so we set it to 500
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;
    // if the error is a mongoose error, then we want to extract the message
    // from the error object
    if(err.name === 'CastError' && err.kind === 'ObjectId') {
        statusCode = 404;
        message = 'Product not found';
    }

    res.status(statusCode);
    res.json({
        message: err.message,
        // we only want to show the stack trace in development mode
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    });
};

export { errorHandler, notFound };

// Path: backend/server.js