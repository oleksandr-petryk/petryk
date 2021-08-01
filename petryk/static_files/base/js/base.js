// general ==============================================
let html = document.querySelector('html')

function sleep(ms) {
    return new Promise(r => setTimeout(r, ms))
}
 
// navigarion ===========================================
let navigation = document.querySelector('.navigation'),
    burger = document.querySelector('.burger');

function adaptateNavigation() { 
    if (window.innerWidth > 576) {
        navigation.classList.remove('navigation-mobile-mode')
        if (window.pageYOffset != 0) { 
            navigation.classList.add('navigation-desktop-mode')
        }
        else {
            navigation.classList.remove('navigation-desktop-mode')
        } 
    }
    else {
        navigation.classList.remove('navigation-desktop-mode')
        if (window.pageYOffset != 0) { 
            navigation.classList.add('navigation-mobile-mode')
        }
        else {
            navigation.classList.remove('navigation-mobile-mode')
        }  
    }
}
function burgerSet() {   
    navigation.classList.toggle('navigation-active') 
    html.classList.toggle('lock-skroll')
}

function setNavigationMode() {
    window.addEventListener('scroll', adaptateNavigation) 

    if (window.innerWidth >! 576) {    
        adaptateNavigation()

        burger.addEventListener('click', burgerSet) 
    } 
}



async function fixNavigationSize() {   
    await sleep(200) 
    navigation.classList.add('navigarion-transition')
}
function whenResize() {  
    setNavigationMode()
    fixNavigationSize()
}

function whenLoad() {  
    setNavigationMode()
    fixNavigationSize()
}

window.onload = whenLoad() 
window.addEventListener("resize", whenResize);

 