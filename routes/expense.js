const express = require('express')
const router = express.Router()
const Expense = require('../models/ExpenseSchema')

router.get('/',  async(req, res) => {
    try {
        const allExpense = await Expense.find({user : req.query.user},{amount:1})
        let exTotal=0;
        if(allExpense.length ==0 ){
            res.json(0);
        }else{
            for (const key in allExpense) {
                if (Object.hasOwnProperty.call(allExpense, key)) {
                    const element = allExpense[key].amount;
                    exTotal+=element;
                }
            }
            res.json(exTotal)
        }
    
        console.log(exTotal);
    } catch (err) {
        res.send("Error : " + err)
    }
})

router.post('/', async (req, res) => {
    const expense = new Expense({
        user:req.body.user,
        // date: req.body.date,
        amount: req.body.amount,
        note: req.body.note,
        catagory: req.body.catagory,
        type: req.body.type
    })
    try {
        const ex = await expense.save()
        console.log(ex);
        res.json(true)
    } catch (err) {
        res.send("Error" + err)
    }
})

module.exports = router