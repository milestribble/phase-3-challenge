const { Client } = require('pg')

const connectionString = process.env.NODE_ENV === 'test'
  ? 'postresql://localhost:5432/grocery_store_test'
  : 'postresql://localhost:5432/grocery_store'


module.exports = {
  query : function (statement, params) {
    return new Promise(function (resolve, reject) {
      let client = new Client({connectionString})
      client.connect().catch(err=>console.log(`database "grocery_store" does not exist\n
  Run 'npm run db:reset' then try again.`))
      client.query(statement, params)
        .then(resolve)
        .catch(reject)
        .then(() => client.end())
    })
  },
  productList : function (query) {
    return new Promise((resolve, reject) => {
      if (!query) reject('No query given')
      this.query(`SELECT items.value as "Product Name", sections.value as "Section" FROM items
        JOIN sections ON items.section_id = sections.self WHERE sections.value = $1`, [query])
        .then(results => typeof results.rows[0] === 'undefined'
          ? reject('Section does not exist')
          : resolve(results.rows))
    })
  },
  shopperOrders : function (query) {
    return new Promise((resolve, reject) => {
      if (!query) reject('No query given')
      this.query(`SELECT order_items.order_id as "Order ID", SUM(items.price) as "Total Cost"
                    FROM order_items
                  JOIN items
                    ON order_items.item_id = items.self
                  JOIN (SELECT self FROM orders WHERE shopper_id = $1) orders
                    ON orders.self = order_items.order_id
                  GROUP BY order_items.order_id`, [query])
        .then(results => typeof results.rows[0] === 'undefined'
          ? reject('Shopper does not exist')
          : resolve(results.rows))
    })
  },
  realShoppers : function (query) {
    return new Promise((resolve, reject) => {
      this.query(`SELECT shoppers.first as "Shopper Name", COUNT(orders.self) as "Number of Orders"
                    FROM shoppers
                  JOIN orders
                    ON shoppers.self = orders.shopper_id
                  GROUP BY shoppers.first`)
        .then(results => resolve(results.rows))
    })
  }
}
