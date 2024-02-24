const mongoose = require('mongoose')

const myUserSchema = new mongoose.Schema({
    name : {
        name : String,
        required : true
    },
    
    reference:{
        type :String,
        required : false
    },
    userType:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'UserType',
        required : true
    }
})

const myUserModel = mongoose.model('myUser' , myUserSchema)

module.exports = myUserModel