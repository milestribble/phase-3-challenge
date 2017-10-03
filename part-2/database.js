const { Pool } = require('pg')

const connectionString = process.env.NODE_ENV === 'test'
  ? 'postresql://localhost:5432/grocery_store_test'
  : 'postresql://localhost:5432/grocery_store'
const pool = new Pool({connectionString})

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

module.exports = {
  query : function (statement, params) {
    return new Promise(function (resolve, reject) {
      pool.connect()
        .then(client => {
          client.query(statement, params)
          .then(res => { client.release(); resolve(res) })
          .catch(e => { client.release(); reject(e) })
        })
    })
  },
  productList : function (query) {
    return new Promise((resolve, reject) => {
      if (!query) {console.error(`No query given`); process.exit(-1)}
      this.query(`SELECT items.value as item, sections.value as section FROM items JOIN sections
        ON items.section_id = sections.self WHERE sections.value = $1`, [query])
        .then(results => resolve(results.rows))
    })
  },
  shopperOrders : function (query) {
    return new Promise((resolve, reject) => {
      if (!query) {console.error(`No query given`); process.exit(-1)}
      this.query(`SELECT order_items.order_id, SUM(items.price)
                    FROM order_items
                  JOIN items
                    ON order_items.item_id = items.self
                  JOIN (SELECT self FROM orders WHERE shopper_id = $1) orders
                    ON orders.self = order_items.order_id
                  GROUP BY order_items.order_id`, [query])
        .then(results => resolve(results.rows))
    })
  },
  realShoppers : function (query) {
    return new Promise((resolve, reject) => {
      this.query(`SELECT shoppers.first, COUNT(orders.self)
                    FROM shoppers
                  JOIN orders
                    ON shoppers.self = orders.shopper_id
                  GROUP BY shoppers.first`)
        .then(results => resolve(results.rows))
    })
  }
}
