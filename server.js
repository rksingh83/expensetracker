const express = require('express')
const dbConnect = require('./dbConnect')
const app = express()
app.use(express.json())
const path = require('path')
const userRoute = require('./routes/usersRoute')
const userTypeRoute = require('./routes/userTypeRoute')
const myUserRoute = require('./routes/myUsersRoute')


const transactionsRoute = require('./routes/transactionsRoute')
app.use('/api/users/' , userRoute)
app.use('/api/userType/' , userTypeRoute)
app.use('/api/myUser/' , myUserRoute)
app.use('/api/transactions/' , transactionsRoute)

const port =process.env.PORT || 6000

if(process.env.NODE_ENV === 'production')
{
     app.use('/' , express.static('client/build'))

     app.get('*' , (req, res)=>{
         res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
     })
}



app.listen(port, () => console.log(`Node JS Server started at port ${port}!`))