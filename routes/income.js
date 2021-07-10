const express = require('express')
const router = express.Router()
const Income = require('../models/IncomeSchema')

router.get('/', async (req, res) => {
    try {
        const allIncomes = await Income.find({ user: req.query.user }, { amount: 1 })
        let inTotal = 0;
        if (allIncomes.length == 0) {
            res.json(0);
        } else {
            for (const key in allIncomes) {
                if (Object.hasOwnProperty.call(allIncomes, key)) {
                    const element = allIncomes[key].amount;
                    inTotal += element;
                }
            }
        res.json(inTotal)
        }
        console.log(inTotal);
    } catch (err) {
        // res.send("Error : " + err)
        console.log(err);

    }
})

router.post('/', async (req, res) => {
    const income = new Income({
        user: req.body.user,
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