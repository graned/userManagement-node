const app = require('./src/app')()
const routes = require('./src/server/routes')(app)
const server = require('./src/server')(routes)

server.start()