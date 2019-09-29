module.exports = class BaseInteractor {
    constructor(entityType) {
        this.entityType = entityType
    }

    createEntityInstance(modelData) {
        return this.entityType.create(modelData)
    }
}