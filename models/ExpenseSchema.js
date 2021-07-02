const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    user: {
        type: String,
        ref: "User"
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    amount: {
        type: Number,
        required: true
    },
    note: {
        type: String,
        required: false
    },
    catagory: {
        type: String,
        required: true
    },
    type:{
        type:String,
        default:"Expense"
    }
})

module.exports = mongoose.model('expenseSchema', expenseSchema)