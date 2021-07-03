const express = require('express')
const router = express.Router()
const Expense = require('../models/ExpenseSchema')

router.get('/',  async(req, res) => {
    try {
        const allExpense = await Expense.find()
        res.json(allExpense)
    } catch (err) {
        res.send("Error : " + err)
    }
})

router.post('/', async (req, res) => {
    const expense = new Expense({
        user:req.body.user,
        date: req.body.date,
        amount: req.body.amount,
        note: req.body.note,
        catagory: req.body.catagory,
        type: req.body.type
    })
    try {
        const ex = await expense.save()
        res.json(ex)
    } catch (err) {
        res.send("Error" + err)
    }
})

module.exports = router