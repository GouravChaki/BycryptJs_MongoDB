const mongoose=require('mongoose')
const mongoURI="mongodb+srv://GouravChaki:password9434874438@weew.uc67ccg.mongodb.net/backendcreate"
const connectmonngo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('Connected to mongodb')
    }) 
}
module.exports=connectmonngo;