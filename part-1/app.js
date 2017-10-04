import bodyParser from 'body-parser'
import express from 'express'
const app = express()

app.disable('etag');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/api/days/:day', (req, res) => {
  let daysOfWeek = {monday: 1, tuesday:2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7}
  let numericDay = daysOfWeek[req.params.day]
  numericDay
    ? res.status(200).type('text/plain').send(`${numericDay}`)
    : res.status(400).type('text/plain').send(`'${req.params.day}' is not a valid day!`)
})

app.post('/api/array/concat', (req, res) => {
  req.headers['content-type'] !== 'application/json'
    ? res.status(400).json({"error": "Input data should be application/json encoded."})
    : !(req.body.array1 instanceof Array) || !(req.body.array2 instanceof Array)
        ? res.status(400).json({"error": "Input data should be of type Array."})
        : res.status(200).json({"result": req.body.array1.concat(req.body.array2)})
})

app.get('/quit', (req, res) => {
  res.status(200).type('text/plain').send('Quit Part 1: Simple web app')
  console.log('Quit Part 1: Simple web app from browser')
  process.exit(0)
})

app.listen(3000)
console.log(`* Listening on http://localhost:3000/
* Use ^C or visit http://localhost:3000/quit to exit
  `);
