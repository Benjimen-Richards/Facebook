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
    const fullname=req.body.firstname+''+req.body.lastname
    const data = {...req.body,fullname}
   const userdata = new user(data)
   userdata.save().then(()=>res.send("Registration success"))
    .catch(err=>console.log(err))
})
userroute.get('/allusers',(req,res)=>
{
    user.find().sort({firstname:-1}).then((data)=>res.send(data))
   .catch(err=>console.log(err))
})
userroute.get('/userinfo/:id',async(req,res)=>
{
    const data = await user.findById(req.params.id)
    res.send(data)
})
userroute.put('/frdrequest/:id',async(req,res)=>
{
    const requestdata = await user.findById(req.params.id) 
    user.findByIdAndUpdate(req.params.id, {$push: {friendrequest: {id:req.params.id}}}).then(result=>res.send(result));
})

module.exports=userroute