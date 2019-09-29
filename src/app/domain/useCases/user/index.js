const getUserByIdFactory = require('./getUserById')

module.exports = (() => {
    return class UserUseCases {
        constructor(userInteractor, userPresenter) {
            this.getUserById = getUserByIdFactory(userInteractor, userPresenter)
        }
    }
})()
