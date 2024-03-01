const mongoose = require('mongoose')

const myUserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    
    reference:{
        type :String,
        required : false
    },
    userType:{
        type : String,
        required : true
    }
})

const myUserModel = mongoose.model('myUser' , myUserSchema)

module.exports = myUserModel