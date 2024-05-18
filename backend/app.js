require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DB=process.env.MONGODB_URL;
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connections successfull");
}).catch((err)=>{
    console.log(err);
    console.log("no connections");
})
const PORT=5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const cors = require('cors');
const customerRoute = require('./routes/customer');
const transactionRoute=require('./routes/TransactionHistory');
app.use(cors());
app.use(express.json());
app.use(customerRoute);
app.use(transactionRoute);


