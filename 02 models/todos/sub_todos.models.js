import mongoose from 'mongoose'

const SubTodoScheme= new mongoose.Scheme({
    content:{
        type: String,
        required: true
    },
    complete:{
        type: Boolean,
        default: false
    },
    createdBy:{
        type: mongoose.Scheme.Types.ObjectId,
        ref:"User"
    }   
}, {timestamps: true})

export const SubTodo= mongoose.model("SubTodo",userScheme)