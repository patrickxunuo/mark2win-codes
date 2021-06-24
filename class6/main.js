//function: frequently used, purposely used code block

//function declaration
function readWeather() {
//    1. open api
//    2. send request
//    3. parse
//
//     console.log('logs from function')
}

//function call
readWeather()

//input parameters
//placing parameter
function add(a, b, taxRate = 1.0) {
    let sum = a + b
    return sum
}

//return value
let finalResult = null
finalResult = add(3, 4, 1.13)

// console.log('final result of a + b = ', finalResult)

let items = [8300, 360, 700, 5500]

function invoiceOutput(items, taxRate = 1.13) {
    if (!Array.isArray(items)) {
        // console.error('Invalid input!')
        return null
    }
    if (items.length === 0) {
        // console.log('Your cart is empty!')
    } else {
        let sum = 0
        // console.log(`This customer has purchased ${items.length} items.`)
        for (let i = 0; i < items.length; i++) {
            sum += items[i]
            // console.log(`Item ${i + 1}: $${items[i]}`)
        }
        sum *= taxRate
        // console.log(`The total amount is $${sum} (tax rate of ${taxRate}).`)
        return sum
    }
}

invoiceOutput(items)

//assignment
//define a function to:
//calculate the total plus tax
// >1000, luxury goods
// <1000, common goods
// input: items price in cart, taxRate
// output: total, arrLuxury, arrCommon

function anaCustomer(items, taxRate = 1.13) {
    if (!Array.isArray(items)) {
        console.log('Invalid input type!')
        return null
    }
    if (items.length === 0) {
        console.log('Your cart is empty!')
        return null
    }
    let total = 0
    let arrLuxury = []
    let arrCommon = []
    items.map(item => {
        total += item
        if (item > 1000) {
            arrLuxury.push(item)
        } else {
            arrCommon.push(item)
        }
    })
    total *= taxRate
    return [total, arrLuxury, arrCommon]
}

let carts = [15, 4563, 252, 5555]
let result = anaCustomer(carts)
// console.log(`The total cost is $${result[0]}.`)
// console.log(`The luxury items are ${result[1]}`)
// console.log(`The common items are ${result[2]}`)

//break, continue, return
//break and continue used in loop

//continue: skip one time
//break: terminate the loop from the break line
for (let i = 0; i < 4; i++) {
    if (i % 2 !== 0) {
        console.log('skipped, ', i)
        break
    }

    console.log('run, ', i)
}
