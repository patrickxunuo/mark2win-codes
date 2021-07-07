const container = document.getElementById('container')
const inputEle = document.getElementById('cityName')
const submitBtn = document.getElementById('submit')
const dots = document.getElementById('loading')
const title = document.getElementById('title')
const api_pre = 'https://api.unsplash.com/search/photos?query='
const api_sub = '&client_id=-5xjwbxb2JzQOmLYwgMnGKua3hOk_Wp2thETHJTlO7o'
let color = null
let inputCity = null
let api = null
let rd = null
let imgData = null
let typeCounter = 0

//type the name of the city
const typeWriter = () => {
    if (typeCounter < inputCity.length) {
        title.innerText += inputCity.charAt(typeCounter);
        typeCounter++
        setTimeout(typeWriter, 200);
    } else {
        typeCounter = 0
    }
}

const hexToRgb = (hex) => {
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return [255 - r, 255 - g, 255 - b];
}

//bind enter key to button click event
inputEle.addEventListener("keyup", event => {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        event.preventDefault();
        submitBtn.click();
    }
});

//button click event
submitBtn.addEventListener('click', () => {
    //reset the typewriter and loader to initial state
    dots.style.display = 'block'
    container.style.opacity = 0
    title.innerText = ''

    //change to upper case and launch the typewriter
    inputCity = inputEle.value.toUpperCase();

    //get api from input
    api = api_pre + inputCity + api_sub

    //fetch api
    fetch(api)
        .then(response => response.json())
        .then(data => {
            //load a thumb image first
            rd = Math.floor(Math.random() * data.results.length)
            imgData = data.results[rd].urls
            color = data.results[rd].color.replace('#', '')
            title.style.color = `rgb(${hexToRgb(color)[0]},${hexToRgb(color)[1]}, ${hexToRgb(color)[2]})`
            document.body.style.backgroundColor = `rgb(${hexToRgb(color)[0]},${hexToRgb(color)[1]}, ${hexToRgb(color)[2]})`
            setTimeout(() => {
                container.style.backgroundImage = `url('${imgData.full}')`;
                setTimeout(() => {
                    container.style.opacity = 1
                    //launch the type writer
                    typeWriter()
                }, 500)
            }, 1000)
            inputEle.value = ''
            dots.style.display = 'none'
        }).catch((err) => {
        //error handing
        inputEle.value = 'Error...'
        imgData = 'url("https://images.unsplash.com/photo-1623018035782-b269248df916?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNDQ1NjN8MHwxfHNlYXJjaHw2fHxFUlJPUnxlbnwwfHx8fDE2MjU2MjUyODc&ixlib=rb-1.2.1&q=85")'
        setTimeout(() => {
            container.style.backgroundImage = imgData;
            inputEle.value = ''
            dots.style.display = 'none'
            setTimeout(() => {
                container.style.opacity = 1
            }, 500)
        }, 1000)
    })
})
