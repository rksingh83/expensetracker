const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://codejunkierk:Ankit1997@cluster0.kaglgam.mongodb.net/?retryWrites=true&w=majority' , {useNewUrlParser : true , useUnifiedTopology : true})


const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))