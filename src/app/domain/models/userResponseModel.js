module.exports = class UserResponseModel {
    constructor(userEntity, addressEntity) {
        this.id = parseInt(userEntity.id, 10) || null;
        this.firstName = userEntity.firstName || null;
        this.lastName = userEntity.lastName || null;
        this.email = userEntity.email || null;
        this.address = addressEntity || null;
    }

    static create(userEntity, addressEntity) {
        return new UserResponseModel(userEntity, addressEntity)
    }
}