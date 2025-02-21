import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    username : {type: String, required : true},
    email : {type : String, required : true, unique: true},
    password : {type : String, required : true}
})

const UserModel = model("user", UserSchema);

export default UserModel