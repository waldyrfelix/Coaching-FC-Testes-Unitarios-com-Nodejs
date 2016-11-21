const chai = require('chai')

const expect = chai.expect

chai.should()

describe('calc', () => {


    describe('calculo js', () => {
        it('quando somar 2 mais 2 retornar 4', () => {
            let soma = 2 + 2

            expect(soma).to.equal(4)
        })

        it('quando subtrair 2 de 5 retornar 3', () => {
            let sub = 5 - 2

            sub.should.be.equal(3)
        })

        it('multiplo de 15 por 5 igual a 0', () => {
            let mod = 15 % 5

            mod.should.be.equal(0)
        })

        it('soma de 1 mais 1 igual a 2', () => {
            let soma = 1 + 1

            soma.should.be.equal(2)
        })

        it('soma de 0.1, 0.1 e 0.1 igual a 0.3', () => {
            let soma = 0.1 + 0.1 + 0.1

            soma.should.be.equal(0.3)
        })
    })



})
