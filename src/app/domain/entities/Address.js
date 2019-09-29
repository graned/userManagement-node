class Address {
    constructor(addressData) {
        this.id = parseInt(addressData.id, 10) || null;
        this.street = addressData.street || null;
        this.houseNumber = addressData.houseNumber || null;
        this.state = addressData.state || null;
        this.zipCode = addressData.zipCode || null;
    }

    static create(addressData) {
        return Object.freeze(new Address(addressData))
    }
}

module.exports = Address
