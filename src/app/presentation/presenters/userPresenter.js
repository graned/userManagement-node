module.exports = (() => {
    let responseModel
    
    return class UserPresenter {
        constructor(userResponseModel) {
            responseModel = userResponseModel
        }
    
        // NOTE: This method is target to create the service response contract
        createOutput(userEntity, addressEntity) {
            return responseModel.create(userEntity, addressEntity)
        }
    }
})()

