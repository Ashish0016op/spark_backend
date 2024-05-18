const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const customerSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    AccountNo:{
        type:Number,
        required:true
    },
    currentBal:{
        type: Number,
        required:true
    }
});

module.exports = mongoose.model('customer', customerSchema);
