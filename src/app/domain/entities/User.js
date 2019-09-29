class User {
    constructor(userData) {
        this.id = parseInt(userData.id, 10) || null;
        this.firstName = userData.firstName || null;
        this.lastName = userData.lastName || null;
        this.email = userData.email || null;
        this.password = userData.password || null;
    }

    static create(userData) {
        return Object.freeze(new User(userData))
    }
}

module.exports = User
