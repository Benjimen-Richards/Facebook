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
    },
    fullname:{
        type:String
    },
    friendrequest:[{
        id:String
    }],
    friends:[{type:Object}]  ,
    likes:[
        {
            likes:{
                type:Number
            },
            comment:{
                type:Number
            },
            commentdescriptionL:{
                type:String
            },
        },
        
    ]

})
const user = mongoose.model('userdata',userSchema)
module.exports =user