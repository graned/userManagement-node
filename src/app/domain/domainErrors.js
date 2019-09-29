function userNotFoundError(message) {
    const error = new Error(message)
    error.type = 'USER_NOT_FOUND_ERROR'
    return error;
}

module.exports = {
    userNotFoundError,
}
