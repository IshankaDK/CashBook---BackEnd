const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const url = 'mongodb://localhost:27017/CashBookDB'


const app = express()
const port = 3010

mongoose.connect(url,{useNewUrlParser:true})

const con = mongoose.connection

con.on('open',()=>{
    console.log("connected");
})

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

const incomeRouter = require('./routes/income')
app.use('/income',incomeRouter)


const expenseRouter = require('./routes/expense')
app.use('/expense',expenseRouter)

const userRouter = require('./routes/user')
app.use('/user',userRouter)

// app.use(express.json)
// app.use(express.urlencoded({ extended: true }))



app.listen(port ,()=>{
    console.log(`app listening at http://localhost:${port}`)
})