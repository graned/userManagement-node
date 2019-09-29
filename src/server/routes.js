module.exports = (app) => {
    async function getUserById(req, res, next) {
        try {
            const { params: data } = req
            const user = await app.userController.getUserByIdHandler(data)
            res.send(user)
        } catch (error) {
            next(error)
        }
    }

    return { 
        getUserById,
    }
}