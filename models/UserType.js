const mongoose = require('mongoose')

const userTypeSchema = new mongoose.Schema({
    userType : {
        type : String,
        required : true,
        index: {
            unique: true,
            dropDups: true
          }
    }
})

const userTypeModel = mongoose.model('userType' , userTypeSchema)

module.exports = userTypeModel