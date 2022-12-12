const Sequelize = require('sequelize')

module.exports = (sequelize,DataTypes) => {
    const retailer = sequelize.define('retailers',{
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mobile_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        retailer_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        // wholesaler_id: {
        //     type: DataTypes.INTEGER
        // },
        wholesaler_id: {
            type: DataTypes.INTEGER,
            // defaultValue: [0]
            // allowNull: false,
            // get() {
            //     return this.getDataValue('favColors').split(';')
            // },
            // set(val) {
            // this.setDataValue('favColors',val.join(';'));
            // },
        },

    });
    return retailer;
}