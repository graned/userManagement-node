module.exports = (() => {
    let requestModel

    return class BaseController {
        constructor(model) {
            requestModel = model
        }
        
        createModelInstance(rawData) {
            return requestModel.create(rawData);
        }
        
        async validateData(data) {
            return requestModel.validate(data)
        }
    }
})()
