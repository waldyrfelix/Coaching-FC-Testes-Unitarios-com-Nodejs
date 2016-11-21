
// chai
const chai = require('chai')

chai.use(require('chai-datetime'))
chai.use(require('chai-things'))

const expect = chai.expect
chai.should()

// sinon
const sinon = require('sinon')
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require('sinon-mongoose');

const Invoice = require('../app/InvoiceModel').Invoice
const InvoiceService = require('../app/InvoiceService').InvoiceService

describe('InvoiceService', () => {

    describe('#calculateTax', () => {
        it('quando calcular 100 reais com taxa de 5% retornar 5 reais', () => {
            let service = new InvoiceService([], new Date(), 0.05)
            let value = service.calculateTax(100.0)

            value.should.be.equal(5)
        })

        it('quando calcular 546 reais com taxa de 16% retornar 87,36', () => {
            let service = new InvoiceService(null, null, 0.16)
            let value = service.calculateTax(546.0)

            value.should.be.equal(87.36)
        })
    })

    describe('#calculateItemAmount', () => {
        it('quando calcular o total por item atualizar o valor do imposto', () => {
            let service = new InvoiceService([], new Date(), 0.1)
            let item = {
                price: 120
            }

            service.calculateItemAmount(item)

            item.tax.should.be.equal(12)
        })

        it('quando calcular o total por item atualizar o valor total do item', () => {
            let service = new InvoiceService([], new Date(), 0.1)
            let item = {
                price: 120
            }

            service.calculateItemAmount(item)

            item.amount.should.be.equal(132)
        })
    })


    describe('#generateInvoice', () => {
        let service;

        beforeEach(() => {
            let items = [{
                price: 120.0
            }, {
                price: 34.0
            }, {
                price: 45.0
            }]

            service = new InvoiceService(items, new Date(2016, 10, 12), 0.08)
        })

        it('quando gerar invoice calcular valor total', () => {
            let invoice = service.generateInvoice()

            expect(invoice.totalAmount).to.equal(214.92)
        })

        it('quando gerar invoice atribuir taxa utilizada', () => {
            let invoice = service.generateInvoice()

            expect(invoice.tax).to.equal(0.08)
        })

        it('quando gerar invoice atribuir data de vencimento', () => {
            let invoice = service.generateInvoice()

            expect(invoice.dueDate).to.equalDate(new Date(2016, 10, 12))
        })

        it('quando gerar invoice atribuir items corretamente', () => {
            let invoice = service.generateInvoice()

            expect(invoice.items).to.be.an('array')

            expect(invoice.items).to.include.something
                .that.deep.all.keys('price','tax', 'amount')
        })
    })
})
