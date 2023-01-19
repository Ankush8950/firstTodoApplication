// user schema
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true,
        trim:true,
        maxLength: 25,
        lowercase: true,
    },
    email:{
        type:String,
        unique:true,
        require:true,
        lowercase: true,
    },
    description:{
        type:String,
        require:true
    }

})

module.exports = mongoose.model("user",userSchema)