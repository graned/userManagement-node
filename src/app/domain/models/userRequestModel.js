// const userValidationSchema = require('./validationSchemas/userSchema')

module.exports = class UserRequestModel {
    constructor(requestData) {
        this.id = parseInt(requestData.id, 10) || null;
        this.firstName = requestData.firstName || null;
        this.lastName = requestData.lastName || null;
        this.email = requestData.email || null;
        this.password = requestData.password || null;
        this.address = requestData.address || null;
    }

    static create(rawData) {
        return new UserRequestModel(rawData)
    }

    static async validate(rawData) {
        return userValidationSchema.validateAsync(rawData)
    }
}
