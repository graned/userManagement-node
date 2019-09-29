const BaseInteractor = require('./baseInteractor')
const { userNotFoundError } = require('../domainErrors')

module.exports = (() => {
    // let userEntity
    let userGateway

    return class UserInteractor extends BaseInteractor {
        constructor(entities, gateways) {
            super(entities.User)
            userGateway = gateways.userGateway
            // userEntity = entities.User
        }
    
        async getUserById(id /*, trx */) {
            const userInstance = await userGateway.getUserById(id)
    
            if (userInstance == null) {
                throw userNotFoundError(`User with Id[${id}] not found`)
            }
    
            return userInstance
        }
    }
})()
