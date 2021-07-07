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
        user:req.body.user,
        // date: req.body.date,
        amount: req.body.amount,
        note: req.body.note,
        catagory: req.body.catagory,
        type: req.body.type
    })
    try {
        const inc = await income.save()
        console.log(inc);
        res.json(true)
    } catch (err) {
        res.send("Error" + err)
    }
})

module.exports = router