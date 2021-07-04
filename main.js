const hamburger = document.getElementById('hamburger')
const hamWrap = document.getElementById('hamburger-wrap')
const navList  = document.getElementById('navList')
hamWrap.addEventListener('click',()=>{
    hamburger.classList.toggle("active")
    navList.classList.toggle("active")
})
