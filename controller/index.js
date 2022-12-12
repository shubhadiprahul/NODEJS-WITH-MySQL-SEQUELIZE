const db = require('../connection')
const wholesaler = db.wholesalers;
const retailer = db.retailers;
const stock = db.stocks;
const sequelize = require('sequelize')
const Op = sequelize.Op


exports.addWholesaler = async(req,res) => {
    console.log(req.body);
    const checkWholersaler = await wholesaler.findAll({
        where:{
            mobile_number: req.body.mobile_number
        }
        
    })
    if (checkWholersaler.length != 0) {
        res.json({
            code: 200,
            msg: 'Wholesaler Already exists'
        })

    } else {

        wholesaler.create({
            name: req.body.name,
            mobile_number: req.body.mobile_number,
        })
        .then((resp) => {
            console.log(resp)
            res.json({
                code: 200,
                msg: "Wholesaler Account Created!"
            })
        }).catch((err) => {
            console.log(err)
            res.json({
                code: 400,
                msg: "something went wrong!"
            })
        })
    }
}

exports.addRetailer = async(req,res) => {
    console.log(req.body);
    retailer.create({
        name: req.body.name,
        mobile_number: req.body.mobile_number,
        wholesaler_id: req.body.wholesaler_id,
    })
    .then((resp) => {
        console.log(resp)
        res.json({
            code: 200,
            msg: "Retailer Account Created!"
        })
    }).catch((err) => {
        console.log(err)
        res.json({
            code: 400,
            msg: "something went wrong!"
        })
    })
}

exports.findByWholesalerId = async(req,res) => {
    console.log(req.body)
    

    retailer.findAll({
        where:{
            wholesaler_id: req.body.wholesaler_id
        }
    }).then((resp) =>{
        // console.log(resp)
        res.json({
            code: 200,
            data: resp,
            total: resp.length
        })
    }).catch((err) => {
        console.log(err)
        res.json({
            code: 400,
            msg: "Something went wrong"
        })
    })
}


exports.monthlyTurnOver = async(req,res) => {
   
    let endDate = "2022-12-11";
    let startDate = "2022-12-10";
    let EndDate = "2022-12-11";
    let StartDate = "2022-11-10";
    const list = await wholesaler.findAll({
        attributes: [[ sequelize.fn('YEAR', sequelize.col('createdAt')), 'data']],
            //     where: {
            //         createdAt: {
            //             [Op.lt]: new Date(endDate),
            //             [Op.gt]: new Date(startDate)
            //         }
            // },
            attributes: ["wholesaler_id"]
        })
        const monthlyTrunover = await stock.findAll({
            attributes: ['wholesaler_id',[sequelize.fn('sum', sequelize.col('stock_amount')), 'some_count_sum']],
                group: ['wholesaler_id'],
                raw: true
        })
        console.log(monthlyTrunover)

        res.send({
            total:[list,monthlyTrunover]
        })
}

exports.add_stocks = async(req,res) => {
    const {stock_amount,retailer_id,wholesaler_id} = req.body
    if(!stock_amount && !retailer_id && !wholesaler_id) {
        res.json({
            code: 200,
            msg: "Enter Proper Details"
        })
    }
    stock.create({
        stock_amount: req.body.stock_amount,
        retailer_id: req.body.retailer_id,
        wholesaler_id: req.body.wholesaler_id,
        stock_date: new Date()
    }).then((resp) => {
        res.json({
            code: 200,
            msg: "Stock details added!"
        })
    }).catch((err) => {
        console.log(err)
        res.json({
            code:400,
            msg: "Something went wrong!"
        })
    })
}