import mongoose from "mongoose";
const userStructure = mongoose.Schema({
    username:{
        type : String,
        required : true,
    },

    email:{
        type : String,
        required : true,
        unique : true,
    },

    password:{
        type : String,
        required : true,
    },

    isAdmin:{
        type : Boolean,
        required : true,
        default : false,
    },
},
{timestamps : true}
);

const User = mongoose.model('User', userStructure);
export default User;