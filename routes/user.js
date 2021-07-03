const express = require('express')
const router = express.Router()
const User = require('../models/UserSchema')

router.get('/', async(req, res) =>{
    try{
        const allUsers = await User.find()
        res.json(allUsers)
    }catch(err){
        res.send("Error : "+err)
    }
})

router.post('/', async (req, res) => {
    const user = new User({
       userId:req.body.userId,
       first_name:req.body.first_name,
       last_name:req.body.last_name,
       email:req.body.email,
       password:req.body.password
    })
    try {
        const us = await user.save()
        res.json(us)
    } catch (err) {
        res.send("Error" + err)
    }
})

module.exports = router