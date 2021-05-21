const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    balance : {
        type : Number
    }
});

const Users = mongoose.model("User",UserSchema);
module.exports = Users;
