// php, python, java, c++, js, ts, ruby
//backend: php, ruby, python, java, c++
//frontend: js
//2015, nodejs, js ->
//high efficiency -> nodejs + js
//js arrow function =>

//js
//2015, oop


//1. variable definition

//
// var name = 'mark'
let name = 'patrick'
let age = 24
let isBoy = true
const pie = 3.1415926
// const a = [1, 2, 3]


// console.log(name)
name = 'lea'
// console.log(name)

// string, number, boolean, primitive
// array, object,

//expression
//math
let score = 1
score = score + 2 //expression
score += 2

score = 3 * (2 - (score - 2 / 5))
// console.log(score)

//mod
score = 3
let s1 = score % 2

//comparison, boolean
score = 4
s1 = score > 5
s1 = 1 == '1'
// console.log(`s1 is: ${s1}`)

//auto increment decrement
s1 = 1
s1++
// s1 = s1 + 1
// s1 += 1
s1++ //first use, then add
++s1 //first add, then use

s1 = 1
let s2 = 1
// console.log(s1++)
// console.log(++s2)
// console.log(s1, s2)

//ternary operator
score = 59
let res = score >= 60 ? 'passed' : 'failed'
// console.log(res)


let a = 3
let b = 4
let c = a++ <= --b ? a++ : b++
//a: 5 b:3 c:4
// console.log(a, b, c)


let j = 4
let k = 4
let d = ++j - 2 <= --k ? j++ : k++
// console.log(j, k, d)
//j k d
//6 3 5

//logic operation, true, false
// && and
// || or
// ! not
res = score >= 60 && score < 85 // left to right, if false, stop running
res = score < 60 || score >= 85 // left to right, if true, stop running
res = !score

//logic control
score = 85
if (score >= 85) {
    console.log('pass')
// } else if (score >= 60 && score < 85) {
    console.log('need work harder')
} else {
    // console.log('...')
}

//loop
//code block
//initialization
//exit condition
//step
// for (let i = 0; i < 5 ; i++){
//     console.log(i)
// }

//10-1
// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }

//10 even
for (let i = 10; i >= 0; i -= 2) {
    // console.log(i)
}

//while
let i = 0
while (i <= 10) {
    // console.log(i)
    if (i % 4 === 0) {
        // console.log('this is a multiple of 4')
    }
    i++
}

//array
//element has one index, starts from 0
let books = ['UI/UX', '100k', 'FSD']
let scores = [85, 72, 60, 33]
// console.log(books)
// console.log(books[0])
// console.log(books[books.length - 1])

for (let i = 0; i < books.length; i++) {
    // console.log(books[i])
}

let scoreIndex = scores.length - 1
while (scoreIndex >= 0) {
    console.log(scores[scoreIndex])
    scoreIndex--
}
