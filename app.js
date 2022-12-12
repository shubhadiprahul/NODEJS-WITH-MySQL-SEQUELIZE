const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config()
const PORT = process.env.PORT || 8080
app.use(morgan('dev'))
app.use(express.json())
require('./connection/index')

const wholesaler = require('./routes/index')

app.use('/',wholesaler);

app.listen(PORT,() => {
    console.log(`Server is running on PORT ${PORT}`)
})