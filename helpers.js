/**
 * 
 * @param {Array} arr any array
 */
function createCounter(arr) {
    // returns a 'counter object' that looks like:
    // > createCounter([1, 2, 3, 4, 5])
    //{ '1': 1, '2': 1, '3': 1, '4': 1, '5': 1 }
    // > createCounter([1, 2, 3, 3, 3, 3])
    // { '1': 1, '2': 1, '3': 4 }
    return arr.reduce(function (acc, next) {
        acc[next] = (acc[next] || 0) + 1
        return acc
    }, {})
}

/**
 * 
 * @param {Array} queryString array of strings
 * @returns {Array|Error} an array or error object
 */
function convertNumsArray(queryString) {
    let results = []

    for (let i = 0; i < queryString.length; i++) {
        let convertToNum = Number(queryString[i])

        if (Number.isNaN(convertToNum)) {
            return new Error(
                `The value ${queryString[i]} at index ${i} is not a valid number.`
            )
        }

        results.push(convertToNum)
    }
    return results
}

function getMean(nums) {
    if (nums.length === 0) return 0;
    return nums.reduce(function(acc, cur) {
        return acc + cur
    }) / nums.length
}

/**
 * 
 * @param {Array} arr any array
 */
 function getMode(arr) {
    let counter = createCounter(arr)

    let count = 0
    let mostFrequent

    for (let key in counter) {
        if (counter[key] > count) {
            mostFrequent = key
            count = counter[key]
        }
    }
    // prefixing the return variable will convert it to a num if it's a string. 
    return +mostFrequent
}

function getMedian(nums) {
    // sort and get middle element

    nums.sort((a, b) => a - b)

    let middleIdx = Math.floor(nums.length / 2);
    let median

    if (nums.length % 2 === 0) {
        median = (nums[middleIdx] + nums[middleIdx - 1]) / 2
    } else {
        median = nums[middleIdx]
    }
    return median
}

module.exports = {
    createCounter,
    getMean,
    getMedian,
    getMode,
    convertNumsArray
}