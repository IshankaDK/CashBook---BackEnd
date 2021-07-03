const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userId:String,
    first_name: String,
    last_name: String,
    email: {
       type: String,
       required: true
    },
    password:{
        type: String,
       required: true
    }
})

module.exports = mongoose.model('userSchema',userSchema)