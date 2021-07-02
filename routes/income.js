const express = require('express')
const router = express.Router()
const Income = require('../models/IncomeSchema')

router.get('/',  async(req, res) => {
    try {
        const allIncomes = await Income.find()
        res.json(allIncomes)
    } catch (err) {
        res.send("Error : " + err)
    }
})

router.post('/', async (req, res) => {
    const income = new Income({
        date: req.body.date,
        amount: req.body.amount,
        note: req.body.note,
        catagory: req.body.catagory,
        type: req.body.type
    })
    try {
        const i1 = await income.save()
        res.json(i1)
    } catch (err) {
        res.send("Error" + err)
    }
})

module.exports = router