const express=require('express')
const app = express()
const port = process.env.PORT || 1111
const cors = require('cors')
const parser = require('body-parser')
const userroute = require('./Routes/userroute')
require('./database/mongoose')
const cloudinary = require('cloudinary').v2
app.use(cors())
app.use(parser.urlencoded({extended:true}))
app.use(parser.json())


app.get('/',(req,res)=>
{
    res.send("Homepage")
})

app.use('/user',userroute)
app.listen(port,()=>{
    console.log(`port started on ${port}`)
})