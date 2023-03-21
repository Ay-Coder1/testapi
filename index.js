const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 1000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan');

const productRouter = require('./routers/productRouter');

const categoryRouter = require('./routers/categoryRouter');

const app = express()

// DB config
const db = require('./config/db').MongoURI;
 
// Database connection
mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const api = process.env.API_URL

// MIDDLEWARE
app.use(bodyParser.json());
app.use(morgan('tiny'))



// product route
app.use(`${api}/products`, productRouter)


// category route
app.use(`${api}/category`, categoryRouter)


app.listen(PORT, () => console.log(`Server start on port ${PORT}`));