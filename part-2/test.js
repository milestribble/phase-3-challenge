const { expect } = require('chai')
const { exec } = require('child_process')
const db = require('./database.js')

function errorOut () {throw new Error('Expected rejection')}
describe('Database function tests', () => {
  describe('productList()', () => {
    it('Regects if it does not recieve a section', done => {
      db.productList()
        .then(errorOut)
        .catch(err => {
          expect(err).to.equal('No query given')
          done()
        })
    })
    it('Regects if the section does not exist', done => {
      db.productList('candy')
        .then(errorOut)
        .catch(err => {
          expect(err).to.equal('Section does not exist')
          done()
        })
    })
    it('Returns the products in the given section', done => {
      db.productList('dairy')
        .then(results =>{
          expect(results).to.deep.equal(results)
          done()
        })
    })
  })
  describe('shopperOrders()', () => {
    it('Regects if it does not recieve a shopper', done => {
      db.shopperOrders()
        .then(errorOut)
        .catch(err => {
          expect(err).to.equal('No query given')
          done()
        })
    })
    it('Regects if the shopper does not exist', done => {
      db.shopperOrders('9')
        .then(errorOut)
        .catch(err => {
          expect(err).to.equal('Shopper does not exist')
          done()
        })
    })
    it('Returns the orders for the given shopper', done => {
      db.shopperOrders('1')
        .then(results =>{
          expect(results).to.deep.equal(results)
          done()
        })
    })
  })
  describe('realShoppers()', () => {
    context('When there are shoppers with at least one order', () => {
      it('Returns the shoppers with at least one order', done => {
        db.realShoppers()
          .then(results =>{
            expect(results[0]).to.have.deep.equal({'Shopper Name': 'Lisa', 'Number of Orders': '1'})
            done()
          })
      })
    })
    context('When there are no shoppers wth orders', () => {
      before(done => {
        db.query('TRUNCATE TABLE orders CASCADE')
          .then(() => done())
      })
      it('Regects if there are no shoppers wth orders', done => {
        db.realShoppers()
          .then(results =>{
            expect(results[0]).to.equal(undefined)
            done()
          })
      })
    })

  })
})
