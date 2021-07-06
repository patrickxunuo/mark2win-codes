const container = document.getElementById('container')
const inputEle = document.getElementById('cityName')
const submitBtn = document.getElementById('submit')
const dots = document.getElementById('loading')
const title = document.getElementById('title')
const api_pre = 'https://api.unsplash.com/search/photos?query='
const api_sub = '&client_id=-5xjwbxb2JzQOmLYwgMnGKua3hOk_Wp2thETHJTlO7o'
let inputCity = null
let api = null
let rd = null
let imgData = null
let typeCounter = 0

const typeWriter = () => {
    if (typeCounter < inputCity.length) {
        title.innerText += inputCity.charAt(typeCounter);
        typeCounter++
        setTimeout(typeWriter, 100);
    }else{
        typeCounter = 0
    }
}


inputEle.addEventListener("keyup", event => {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        event.preventDefault();
        submitBtn.click();
    }
});

submitBtn.addEventListener('click', () => {
    dots.style.display = 'block'
    inputCity = inputEle.value.toUpperCase();
    title.innerText = ''
    api = api_pre + inputCity + api_sub
    typeWriter()
    fetch(api)
        .then(response =>
            response.json()
        )
        .then(data => {
            imgData = data
            rd = Math.floor(Math.random() * data.results.length)
            container.style.backgroundImage = `url('${data.results[rd].urls.thumb}')`;
            inputEle.value = ''
        }).catch((err) => {
        inputEle.value = 'Error...'
        setTimeout(() => inputEle.value = '', 2000)
    })
        .finally(() => {
            dots.style.display = 'none'
            container.style.backgroundImage = `url('${imgData.results[rd].urls.full}')`;
        })
})
