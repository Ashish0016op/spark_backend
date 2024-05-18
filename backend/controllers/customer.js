const customerModel = require('../models/customer');

exports.postDetails = async (req, res, next) => {
    try {
        const data = req.body.data;
        console.log("data is",data);
        const newCustomer = await customerModel.create({
            Username: data.Username,
            email: data.email,
            AccountNo:data.AccountNo,
            currentBal: data.currentBal
        });
        res.status(200).json({ newCustomer: newCustomer });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getDetails = async (req, res, next) => {
    try {
        const allCustomers = await customerModel.find();
        res.status(200).json({ allCustomer: allCustomers });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.updateCustomerBal = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { bal } = req.body;
        const balance = parseInt(bal);
        console.log("balance is",balance);
        const updatedCustomer = await customerModel.findByIdAndUpdate(
            id,
            { currentBal: balance }, 
            { new: true }
        );
        if (!updatedCustomer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.status(200).json({ message: 'Customer balance updated successfully', updatedCustomer });
    } catch (err) {
        console.error('Error updating customer balance:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.updateCustomerReceivedBal = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { bal } = req.body;
        const balance = parseInt(bal);
        const updatedCustomer = await customerModel.findByIdAndUpdate(
            id,
            { $inc: { currentBal: balance } }, 
            { new: true }
        );
        if (!updatedCustomer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.status(200).json({ message: 'Customer balance updated successfully', updatedCustomer });
    } catch (err) {
        console.error('Error updating customer balance:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateCustomerSendBal = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { bal } = req.body;
        const balance = parseInt(bal);
        const updatedCustomer = await customerModel.findByIdAndUpdate(
            id,
            { $inc: { currentBal: -balance } },
            { new: true }
        );
        if (!updatedCustomer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.status(200).json({ message: 'Customer balance updated successfully', updatedCustomer });
    } catch (err) {
        console.error('Error updating customer balance:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.deleteCustomerDetails = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedCustomer = await customerModel.findByIdAndDelete(id);
        if (!deletedCustomer) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        res.status(200).json({ message: 'Customer deleted successfully', deletedCustomer });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
