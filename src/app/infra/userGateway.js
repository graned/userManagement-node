const BaseGateway = require('./baseGateway')
const { Knex } = require('./db')

const userPropertyMapper = {
    id: 'id',
    first_name: 'firstName',
    last_name: 'lastName',
    email: 'email',
    password: 'password',
}

module.exports = (() => {
    let knexClient
    let userEntity

    return class UserGateway extends BaseGateway {
        constructor(entities) {
            super(userPropertyMapper)
            userEntity = entities.User
            knexClient = Knex.createClient()
        }
    
        async getUserById(id) {
            if (id == null) return null
    
            const rawData = await knexClient('users')
                .select()
                .where(this.mapToSource({ id }));
    
            return rawData.length ? userEntity.create(this.mapToDomain(rawData.pop())): null;
        }
    
        async createUser(userEntityInstance) {
            const mappedData = this.mapToSource(userEntityInstance);
            
            const newUser = await knexClient('users')
                .insert({
                    ...mappedData,
                    password: knexClient.raw(`crypt('${mappedData['password']}', gen_salt('bf', 8))`),
                })
                .returning('*');
            
            return userEntity.create(this.mapToDomain(newUser.pop()))
        }
    
    
        get userPropertyMapper() {
            return propertyMapper
        }
    }
})()
