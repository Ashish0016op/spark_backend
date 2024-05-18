const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const TransactionHistory = new mongoose.Schema({
    Sender: {
        type: Number,
        required: true
    },
    Receiver: {
        type: Number,
        required: true
    },
    Amount:{
        type: Number,
        required:true
    },
    Status:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('transactionHistory', TransactionHistory);