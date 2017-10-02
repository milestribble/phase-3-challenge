import bodyParser from 'body-parser'
import express from 'express'
const app = express()

app.disable('etag');

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/days/:day', (req, res) => {
  let daysOfWeek = {monday: 1, tuesday:2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7}
  let numericDay = daysOfWeek[req.params.day]
  numericDay ? res.status(200).send(`${numericDay}`) : res.status(400).send(`'${req.params.day}' is not a valid day!`)
})
//
// app.post()
//
app.listen(3000)
