const express = require('express')

const activitiesRouter = require('./Routes/activitiesRoutes');
const userRouter = require('./Routes/userRouter');
const connectDB=require('./config/connectDB')
require('dotenv').config()
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())  //use this after variable declaration


app.use("/uploads", express.static(__dirname + "/uploads"));
app.use('/activities', activitiesRouter)
app.use('/users', userRouter)
connectDB()
const port = 5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))