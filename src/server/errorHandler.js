const httpErrors = require('http-errors')

function determineHttpError(error) {
    switch (error.type) {
        case 'USER_NOT_FOUND_ERROR': 
            return httpErrors.NotFound()        
        default:
            return httpErrors.InternalServerError()
    }
}

module.exports = (error, req, res, next) => {
    console.log('> error', error);
    
    const httpError = determineHttpError(error)
    // logger.error(`Error during API execution status[${status}]: ${error}`)
    res.send(httpError)    
}
