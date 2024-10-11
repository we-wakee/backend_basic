import mongoose from 'mongoose'

const userScheme= new mongoose.Scheme({
    username: {
        type : String,
        required : true,
        unique: true,
        lowercase: true,
    },
    email :{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    },
}, {timestamps: true})

export const User= mongoose.model("User",userScheme)