const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    sender : {
        type : String
    },
    receiver : {
        type : String
    },
    balance : {
        type : Number
    }
},{
    timestamps : true,
});

const transactions = mongoose.model( "transaction", transactionSchema);
module.exports =  transactions;
