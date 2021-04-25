const express = require('express')
const app = express()
const ExpressError = require('./expressError')

const { createCounter, convertNumsArray, getMode, getMean, getMedian } = require('./helpers')

app.use(express.json())

app.get('/', (req, res) => {
    return res.send("Hello World!")
})

app.get('/mean', (req, res) => {
    if (!req.query.nums) {
        throw new ExpressError("You must pass a query key of 'nums' with a value of a list of numbers seperated by commas.", 400)
    }
    let numStrings = req.query.nums.split(',')
    let nums = convertNumsArray(numStrings)

    if (nums instanceof Error) {
        throw new ExpressError(nums.message)
    }

    let results = {
        operation: "mean",
        result: getMean(nums)
    }

    return res.send(results)
})

app.listen(3000, () => {
    console.log("HELLO")
})