//string interpolation, template literal
let name = 'mark'

console.log(`The teacher's name is: ${name}`)

//spread operator //array, object

let jcars = ['toyota', 'honda']
let gcars = ['benz', 'bmw', ...jcars]

// arrow function
// =>
// left: parameter
//right: body
// arrow function does not create its block
let eleBtn = document.getElementById('btn')
// eleBtn.addEventListener('click',function(evt){
//     console.log(evt)
// })

const consoleSth = (e) => {
    console.log(e)
}

eleBtn.addEventListener('click', consoleSth)


//destruction

//object
let car = {
    color: 'red',
    mileage: 1000,
    imported: false,
    tires: ['sea', 'sea', 'land', 'land'],
    funHorn: count => console.log('...'),
    engine: {
        type: 'v6',
        liters: 3.5,
    }
}

let benzCar = {...car, matric: true, mileage: 2000}

// console.log(car.color)


let laptop = {
    year: 2020,
    prince: 2000,
    size: 17,
    warranty: true,
    owner: 'patrick',
    color: 'silver',
}

let macBook = {...laptop, isPricy: true}

//destruction
let {tires, color} = car

//
let brand = 'cherry'
let count = 104


//when the key name is the same as a variable name
let keyboard = {
    brand,
    count
}
console.log(keyboard)
