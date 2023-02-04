const mongoose=require('mongoose')
const {schema}=mongoose;
const Schema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});
const user=mongoose.model('aloo',Schema)
user.createIndexes();
module.exports=user