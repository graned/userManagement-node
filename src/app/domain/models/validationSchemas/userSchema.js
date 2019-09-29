const Joi = require('joi')

const userSchema = Joi.object({
    id: Joi.number,
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email({ minDomainSegments: 2 }),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
    // address:
})

module.exports = userSchema
