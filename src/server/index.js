const express = require('express')
const bodyParser = require('body-parser')
const errorHandler = require('./errorHandler')
const config = require('config')

module.exports = (routes) => {
    const app = express()
    const jsonParser = bodyParser.json()

    const host = config.get('host')
    const port = config.get('port')

    function start(){
        app.listen(port, host, () => {
            console.log(`Server started at ${host}:${port}`);
        })
        createRoutes()
    }
    
    function createRoutes() {
        app.use(jsonParser)
        app.get('/users/:id', routes.getUserById)
        // app.post('/user', routes.createUser)
    
        app.use(errorHandler)
    }

    return { start }
}