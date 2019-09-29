const BaseController = require('./baseController')

module.exports = (() => {
    let useCases
    
    return class UserController extends BaseController {
        constructor(userUseCases, userRequestModel) {
            super(userRequestModel)
            useCases = userUseCases;
        }
    
        async getUserByIdHandler(requestData) {
            // await this.validateData(requestData)
            const requestModel = this.createModelInstance(requestData)
            
            return useCases.getUserById(requestModel)
        }
    }
})()
