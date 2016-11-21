const Invoice = require('./InvoiceModel').Invoice

class InvoiceService {
    constructor(items, dueDate, tax) {
        this.tax = tax
        this.items = items
        this.dueDate = dueDate
        this.totalAmount = 0
    }

    calculateTax(value) {
        return value * this.tax;
    }

    calculateItemAmount(item) {
        item.tax = this.calculateTax(item.price)
        item.amount = item.price + item.tax
    }

    generateInvoice(callback) {
        for (let item of this.items) {
            this.calculateItemAmount(item)

            this.totalAmount += item.amount
        }

        let invoice = {
            totalAmount: this.totalAmount,
            items: this.items,
            dueDate: this.dueDate,
            tax: this.tax
        }

        return invoice
    }

    save(invoice) {
        let invoiceModel = new Invoice(invoice)
        invoiceModel.save()
    }
}

module.exports = {
    InvoiceService
};
