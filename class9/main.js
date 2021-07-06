const arrImg = [
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-210628-P11-MVM-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-210628-samsung-kitchen-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-210628-samsung-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-210628-gourmet-food-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-210628-travel-en.jpg',
]

const arrBtn = [
    'Savings',
    'Samsung',
    'Book',
    'Food',
    'Travel',
]

const szContainerIdImg = 'carouselImg'
const eleDivImg = document.getElementById(szContainerIdImg)

const szContainerIdBtn = 'carouselBtn'
const eleDivBtn = document.getElementById(szContainerIdBtn)

const szBtnToggle = 'btnToggle'
const btnToggle = document.getElementById(szBtnToggle)

let arrEleBtn = []
let arrEleImg = []

//creates all image and button elements
function createElements() {
    for (let i = 0; i < arrImg.length; i++) {
        let eleImg = document.createElement('img')
        arrEleImg.push(eleImg)
        eleImg.src = arrImg[i]
        eleImg.style.width = '100%'

        //if hover image, pause the carousel
        eleImg.addEventListener('mouseenter',()=>{
            //check if the carousel switch is set to "play" at the moment
            if(btnToggle.classList.contains('fa-pause')) {
                clearInterval(startInterval)
            }
        })
        //if mouse move away, restart the carousel
        eleImg.addEventListener('mouseleave',()=>{
            //check if the carousel switch is set to "play" at the moment
            if(btnToggle.classList.contains('fa-pause')){
                startInterval = setInterval(funSwitchImage,1500)
            }
        })

        let eleBtn = document.createElement('button')
        arrEleBtn.push(eleBtn)
        eleBtn.innerText = arrBtn[i]
        // eleBtn.id = `btn-${i}`
        // eleBtn.setAttribute('mkIndex', i)

        //create button event listener
        eleBtn.addEventListener('click', function(){
            //if button is clicked, pause the carousel and jump to the corresponding image
            toggleCarousel(true)
            clearInterval(startInterval)
            indexImg = i
            console.log(indexImg)
            // indexImg = parseInt(eleBtn.id[4])
            // indexImg = eleBtn.getAttribute('mkIndex')
            funSwitchImage()
        })

        eleDivImg.appendChild(eleImg)
        eleDivBtn.appendChild(eleBtn)
    }
}

createElements()

let indexImg = 0 //showing index of current image

//hide all elements in the array
function hideAllElements(arrElement) {
    for (let i = 0; i < arrElement.length; i++) {
        arrElement[i].style.display = 'none'
    }
}

//highlight a button
function highlightButton(eleBtn) {
    for (let i = 0; i < arrEleBtn.length; i++) {
        arrEleBtn[i].className = 'btnNoShowing'
    }
    eleBtn.className = 'btnShowing'
}

//jump to next image
const funSwitchImage = (changeIndex = indexImg) => {
    //first, hide all elements
    hideAllElements(arrEleImg)
    highlightButton(arrEleBtn[indexImg])

    //second, show the specific element only of indexImg
    arrEleImg[indexImg].style.display = 'block'
    indexImg++
    if (indexImg === arrEleImg.length) {
        indexImg = 0
    }
}

//toggle between play and pause
const toggleCarousel = (strictClose = false) => {
    if(strictClose===true){
        btnToggle.classList.remove('fa-pause')
        btnToggle.classList.add('fa-play')
        clearInterval(startInterval)
        return
    }
    if (btnToggle.classList.contains('fa-pause')) {
        btnToggle.classList.remove('fa-pause')
        btnToggle.classList.add('fa-play')
        clearInterval(startInterval)
    } else {
        btnToggle.classList.remove('fa-play')
        btnToggle.classList.add('fa-pause')
        startInterval = setInterval(funSwitchImage, 1500)
    }
}

btnToggle.addEventListener('click', toggleCarousel)

funSwitchImage()
let startInterval = setInterval(funSwitchImage, 1500)



