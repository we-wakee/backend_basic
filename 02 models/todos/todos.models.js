import mongoose from 'mongoose'

const TodoScheme= new mongoose.Scheme({
    content: {
        type : String,
        required : true,
        
    },
    complete :{
        type: Boolean,
        default:false
    },
    createdBy:{
        type: mongoose.Scheme.Types.ObjectId,
        ref: "User" 
    },
    subTodos :{
        type: mongoose.Scheme.Types.ObjectId,
        ref:"SubTodo",
    }
}, {timestamps: true})

export const Todo= mongoose.model("Todo",userScheme)