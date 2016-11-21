const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const InvoiceService = require('./app/InvoiceService').InvoiceService

// let connection = mongoose.connect('mongodb://localhost:27017/unittest_db', {
//     server: {
//         poolSize: 10,
//         socketOptions: {
//             keepAlive: 300000,
//             connectTimeoutMS: 30000
//         }
//     }
// }, err => {
//     if (err) throw err;
// });


// let items = [{price: 129}]
// let invoiceService = new InvoiceService(items, new Date(), 0.1)
// let invoice = invoiceService.generateInvoice()
// invoiceService.saveInvoice(invoice)
//     .then(()=>{
//         console.log('done');
//      })
