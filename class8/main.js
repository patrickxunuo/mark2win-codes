let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2')
let container = document.getElementById('container')
if (!container) {
    console.log('error, cannot find container')
}

let count = 0

function RGBToHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length === 1)
        r = "0" + r;
    if (g.length === 1)
        g = "0" + g;
    if (b.length === 1)
        b = "0" + b;

    return "#" + r + g + b;
}


// btn.addEventListener('click', () => {
//     let eleH1 = document.createElement('h1')
//     let date = new Date()
//     eleH1.innerText = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds()
//     eleH1.style.color = RGBToHex(120 + 20 * count, 120 + 22 * count, 110 + 23 * count)
//     container.appendChild(eleH1)
//     count++
//     if (count >= 10) {
//         count = 0
//     }
// })

// setTimeout(function() {
//     console.log('now is:', new Date().getSeconds())
// }, 1500)
let timerId = null

// setInterval(function() {
//     console.log('now is:', new Date().getSeconds())
// }, 1500)

const createInterval = () =>{
    timerId = setInterval(()=>{
        let eleP = document.createElement('p')
        eleP.innerText = "pat"
        container.appendChild(eleP)
    },1000)
    btn.removeEventListener('click',createInterval)
}

const stopInterval = ()=> {
    clearInterval(timerId)
    btn.addEventListener('click', createInterval)
}

btn.addEventListener('click', createInterval)
btn2.addEventListener('click', stopInterval)





