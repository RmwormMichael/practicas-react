import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        }
    },{timestamps:true}
)

export default mongoose.model("User", userSchema)