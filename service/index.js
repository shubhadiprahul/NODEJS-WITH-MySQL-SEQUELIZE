const db = require('../connection/index');
const wholesalers = db.wholesalers;
const retailer = db.retailers;
const stocks = db.stocks;

module.exports = class UserService{
    async createWholesaler(details) {
        console.log(details,"service details");
        return await wholesalers.create(details);
    }
}