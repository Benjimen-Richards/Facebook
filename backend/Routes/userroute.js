const express = require('express')
const user = require('../models/usermodel')
const app = express()

const userroute = express.Router()


userroute.get('/',async (req,res)=>
{
    const database = await user.find()
    return res.send(database)
})
userroute.post('/register',async(req,res)=>
{
   const data = new user(req.body)
    data.save().then(()=>res.send("Registration success"))
    .catch(err=>console.log(err))
})


module.exports=userroute