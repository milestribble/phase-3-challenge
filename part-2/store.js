#! /usr/local/bin/node

const db = require('./database.js')
let command
let query

try {
  command = process.argv[2] ? process.argv[2].split('-') : undefined
  command[1] = command[1].charAt(0).toUpperCase() + command[1].slice(1)
  command = command.join('')
  query = process.argv[3]
} catch (error) {
  if (error.message.includes('command') || error.message.includes('charAt')) {
    console.log(`${process.argv[2]} is not a valid sub-command.
    Try product-list, shopper-orders, or real-shoppers.`);
    process.exit(1)
  } else {
    console.log(error);
  }
}

db[command](query)
  .then(tableData => {
    let print = []
    for (x in tableData[0]) {print.push([x, x.length])}
    tableData.forEach((el) =>{
      el[print[0][0]].length > print[0][1]
        ? print[0][1] = el[print[0][0]].length : 0
      el[print[1][0]].length > print[1][1]
        ? print[1][1] = el[print[1][0]].length : 0
      print.push( [ el[print[0][0]] , el[print[1][0]] ] )
    })
    while (print[0][0].length < print[0][1]) {print[0][0] += " "}
    while (print[1][0].length < print[1][1]) {print[1][0] += " "}
    for (let i = 2; i<print.length; i++) {
      while (print[i][0].length < print[0][1]) {print[i][0] += " "}
      while (print[i][1].length < print[1][1]) {print[i][1] += " "}
     }
    let linebreak = '|-'+'-'.repeat(print[0][1])+'-|-'+'-'.repeat(print[1][1])+'-|'
    console.log(linebreak);
    console.log('| '+print[0][0]+' | '+print[1][0]+' |');
    console.log(linebreak);
    for (let i = 2; i<print.length; i++) {
      console.log('| ' + print[i].join(' | ') + ' |');
    }
    console.log(linebreak);
  })
