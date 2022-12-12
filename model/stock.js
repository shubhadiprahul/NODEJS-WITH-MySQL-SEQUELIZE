module.exports = (sequelize,DataTypes) => {
    const stock = sequelize.define('stocks',{
        retailer_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        wholesaler_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stock_amount: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        stock_date: {
            type: DataTypes.DATEONLY
        }
        },{
            timestamps: true
    });
    return stock;
}