const  mongoose = require("mongoose")

// const mongourl = "mongodb://localhost:27017/facebook"
const mongourl='mongodb+srv://benjimen:richards@cluster0.36l95.mongodb.net/facebook?retryWrites=true&w=majority'
mongoose.connect(mongourl,{
    useNewUrlParser:true,
    useFindAndModify:true,
    useCreateIndex:true
})