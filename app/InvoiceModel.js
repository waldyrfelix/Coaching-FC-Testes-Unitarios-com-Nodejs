const mongoose = require('mongoose')

const Schema = mongoose.Schema

const InvoiceSchema = new Schema({
    items: [new Schema({
        price:  Number,
        amount: Number,
        tax: Number
    })],
    dueDate: {
        type: Date,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        required: true
    }
});

module.exports.InvoiceSchema = InvoiceSchema;
module.exports.Invoice = mongoose.model('Invoice', InvoiceSchema);
