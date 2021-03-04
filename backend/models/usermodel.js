const mongoose= require("mongoose");

const userSchema = new mongoose.Schema({
    
    email:{
        type:String,
     required:true
    }
    // firstname:{
    //     type:String,
    //     required:true
    // },
    // surname:{
    //     type:String,
    //     required:true
    // },
    // phone:{
    //     type:Number,
    //     required:true
    // },
    // password:{
    //     type:String,
    //     required:true
    // },
    // dob:{
    //     type:String,
    //     required:true
    // },
    // friends:[{type:Object}]  
})
const user = mongoose.model('userdata',userSchema)
module.exports =user