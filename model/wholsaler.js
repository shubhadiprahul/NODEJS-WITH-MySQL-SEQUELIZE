
module.exports = (sequelize,DataTypes) => {
    const wholesalers = sequelize.define('wholesalers',{
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mobile_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        wholesaler_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    },{
        timestamps: true
    });
    return wholesalers
}


