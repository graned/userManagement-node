module.exports = (userInteractor, userPresenter) => async (requestModel) => {
    const retrievedUser = await userInteractor.getUserById(requestModel.id)
    // const retrievedAddress = await addressInteractor.getUserAddress(retrievedUser)

    return userPresenter.createOutput(retrievedUser /*, retrievedAddress */)   
}