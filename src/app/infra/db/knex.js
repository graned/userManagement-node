const knex = require('knex')
const config = require('config')

module.exports = (() => {
    let knexClient

    return class Knex {
        static createClient() {
            const dbConfig = config.get('db')
    
            const opts = {
                client: 'pg',
                connection: dbConfig.url,
                pool: dbConfig.pool,
            };
    
            knexClient = knex(opts);
            
            return knexClient
        }

        getClient() {
            return knexClient
        }
    }
})()
