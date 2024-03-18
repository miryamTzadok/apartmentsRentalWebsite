//חיבור לשרת
const express=require('express')
const app=express()
const dotenv = require('dotenv')
dotenv.config()

const connectToDB = require('./connectDB')
const customerRouter = require('./routes/customer')
const categoryRouter = require('./routes/category')
const apartmentRouter = require('./routes/apartment')
const advertiserRouter = require('./routes/advertiser')
const cityRouter = require('./routes/city')
const chatBot = require('./routes/chatBot')


const cors=require('cors')
connectToDB()

//המרות
const bodyParser=require('body-parser')
app.use(bodyParser.json())

app.use(cors())

app.use('/customer', customerRouter)
app.use('/category', categoryRouter)
app.use('/apartment', apartmentRouter)
app.use('/advertiser', advertiserRouter)
app.use('/city', cityRouter)
app.use('/chatBot',chatBot)
app.use('/uploads', express.static('uploads'))
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.listen(3002,()=>{
    console.log("goood");
}) 
app.get('',(req,res)=>{
    res.status(200).send("wowwwwwwww")
})
