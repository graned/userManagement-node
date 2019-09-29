const entities = require('./domain/entities')
const { UserGateway } = require('./infra')
const { UserRequestModel, UserResponseModel } = require('./domain/models')
const { UserPresenter } = require('./presentation/presenters')
const { UserInteractor } = require('./domain/interactors')
const { UserUseCases } = require('./domain/useCases')
const { UserController } = require('./presentation/controllers')

module.exports = () => {
    const userGateway = new UserGateway(entities)
    const userInteractor = new UserInteractor(entities, { userGateway })
    const userPresenter = new UserPresenter(UserResponseModel);
    const userUseCases = new UserUseCases(userInteractor, userPresenter)
    const userController = new UserController(userUseCases, UserRequestModel)

    return { userController }
}