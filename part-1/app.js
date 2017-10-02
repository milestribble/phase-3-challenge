import bodyParser from 'body-parser'
import express from 'express'
const app = express()

app.disable('etag');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/api/days/:day', (req, res) => {
  let daysOfWeek = {monday: 1, tuesday:2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7}
  let numericDay = daysOfWeek[req.params.day]
  numericDay ? res.status(200).send(`${numericDay}`) : res.status(400).send(`'${req.params.day}' is not a valid day!`)
})

app.post('/api/array/concat', (req, res) => {
  req.headers['content-type'] !== 'application/json'
    ? res.status(400).json({"error": "Input data should be application/json encoded."})
    : !(req.body.array1 instanceof Array) || !(req.body.array2 instanceof Array)
        ? res.status(400).json({"error": "Input data should be of type Array."})
        : res.status(200).json(req.body.array1.concat(req.body.array2))
})

app.listen(3000)
