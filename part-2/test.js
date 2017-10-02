import {assert, expect} from 'chai'
import db from './database.js'

describe('Database function tests', () => {
  describe('productList()', () => {
    it('Regects if it does not recieve a section', done => {

    })
    it('Regects if the section does not exist', done => {

    })
    it('Returns the products in the given section', done => {

    })
  })
  describe('shopperOrders()', () => {
    it('Regects if it does not recieve a shopper', done => {

    })
    it('Regects if the shopper does not exist', done => {

    })
    it('Returns the orders for the given shopper', done => {

    })
  })
  describe('realShoppers()', () => {
    context('When there are no shoppers wth orders', () => {
      it('Regects if there are no shoppers wth orders', done => {

      })
    })
    context('When there are shoppers with at least one order', () => {
      it('Returns the shoppers with at least one order', done => {

      })
    })
  })
})
