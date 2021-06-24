// event, trigger, handler

//event listener register

function clickHandler(event) {
    console.log('clicked')
}

function keyPressHandler(e) {
    console.log(e.key)
}

let objBtn2 = document.getElementById("btn2")
let objBtn3 = document.getElementById("btn3")
let objBtn4 = document.getElementById("btn4")
// if(objBtn === null || objBtn === undefined){
//
// }

//anonymous function
//handler -> call back function

const mouseMoveHandler = (e,num) => {
    if(num===1){
        console.log('mouse moving on btn2...', e.clientX, e.clientY)
    }
    if(num===2){
        console.log('mouse moving on btn3,,,', e.clientX, e.clientY)
    }
}

const mouseMoveHandler2 = (e) =>{
    console.log(e)
}

objBtn2.addEventListener('mousemove', (event) => mouseMoveHandler(event,1))
objBtn3.addEventListener('mousemove', (event) => mouseMoveHandler(event,2))

objBtn4.addEventListener('click',mouseMoveHandler2)
