const mongoose= require("mongoose");

const userSchema = new mongoose.Schema({
    
    email:{
        type:String,
    },
    firstname:{
        type:String,
       
    },
    lastname:{
        type:String,
        
    },
    password:{
        type:String,
        
    },
    dob:{
        type:String,
        required:true
    },
    friends:[{type:Object}]  
})
const user = mongoose.model('userdata',userSchema)
module.exports =user