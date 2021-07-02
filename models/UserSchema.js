const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userId:String,
    first_name: String,
    last_name: String,
    email: String,

    

})
