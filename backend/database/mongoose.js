const  mongoose = require("mongoose")

const mongourl = "mongodb://localhost:27017/facebook"
mongoose.connect(mongourl,{
    useNewUrlParser:true,
    useFindAndModify:true,
    useCreateIndex:true
})