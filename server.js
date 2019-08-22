import 'dotenv/config';
import express from 'express';

const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let routes = require('./src/api/routes') //importing route
routes(app)

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
})

const server = app.listen(process.env.PORT, () =>
  console.log(`Express running → PORT ${server.address().port}`),
);