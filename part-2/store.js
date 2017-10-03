#! /usr/local/bin/node

const { exec } = require('child_process')
const db = require('./database.js')

exec(`echo 'CREATE DATABASE grocery_store' | psql`, (error, stdout, stderr) =>
  stdout ? loadSchema(): parseTask()
)

function loadSchema () {
  exec(`psql grocery_store < ./schema.sql`, (error, stdout, stderr) =>
    error ? console.error(`exec error: ${error}`) : loadData()
)}

function loadData () {
  exec(`psql grocery_store < ./load-data.sql`, (error, stdout, stderr) =>
    error ? console.error(`exec error: ${error}`) : parseTask()
)}

function parseTask () {
  try {
  let command = process.argv[2] ? process.argv[2].split('-') : undefined
  command[1] = command[1].charAt(0).toUpperCase() + command[1].slice(1)
  command = command.join('')
  let query = process.argv[3]
  db[command](query)
  } catch (error) {
    if (error.message.includes('command') || error.message.includes('charAt')) {
      console.log(`${process.argv[2]} is not a valid sub-command.
      Try product-list, shopper-orders, or real-shoppers.`);
      process.exit(1)
    } else {
      console.log(error);
    }
  }
}
