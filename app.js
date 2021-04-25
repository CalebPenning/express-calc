const express = require('express')
const app = express()
const ExpressError = require('./expressError')

app.use(express.json())

app.get('/', (req, res) => {
    return res.send("Hello World!")
})

app.get('/mean', (req, res) => {
    if (!req.query.nums)
})

app.listen(3000, () => {
    console.log("HELLO")
})