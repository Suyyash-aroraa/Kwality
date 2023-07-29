const logo = document.querySelector('.logo')
const bars = document.querySelector('.bars-btn')
const panelTop = document.querySelector('.top-panel')

var openMenu = false
var menuOpacity = 0
var menuLeft = -100
const menu = document.querySelector('.nav-menu')

var logoHeight = 4;
var runningLoopHeight = true;
var logoTop = 1.3;
var navOpacity = 0;

document.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    if (value>300){
        document.querySelector('.order').style.zIndex = '90';
        
    }
    else {
        document.querySelector('.order').style.zIndex = '101';
        
    }
    if (value>=30){
        if (logoHeight>3 && runningLoopHeight){
            
            runningLoop = false
            var logoChangeHeight = setInterval(()=>{
                logo.style.height = logoHeight + 'rem';
                logoHeight -= .01;
                console.log(logoHeight)
                if (logoHeight<=3){
                    clearInterval(logoChangeHeight)
                    logoChangeHeight = null;
                }
            }, '1' );
        }
        // logo.style.height = '3rem';
        document.querySelector('.hidden').style.display = 'block';
        logo.style.top = '.5rem';
        logo.style.position = 'fixed';
        bars.style.position = 'fixed';
        bars.style.borderRight = '.1rem solid white';
        bars.style.width = '3.9rem';
        panelTop.style.position = 'fixed';
        panelTop.style.borderBottom = '.1rem solid white'
        panelTop.style.backgroundColor = '#151624'
    }
    
})

document.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    if (value<=30){
        document.querySelector('.hidden').style.display = 'none';
        logo.style.height = '4rem';
        logoHeight =4;
        runningLoopHeight = true;
        logo.style.top = '1.3rem';
        logo.style.position = 'absolute';
        bars.style.position = 'relative';
        bars.style.borderRight = '0';
        bars.style.width = '3.9rem';
        panelTop.style.position = 'fixed';
        panelTop.style.borderBottom = '0'
        panelTop.style.backgroundColor = 'rgba(0,0,0,0)'
    }
})


var degree = 0

setInterval(()=>{
    $('.dish-image').css('transform', 'rotate('+ degree+'deg)' )
    degree+= .02;
}, '1')


document.querySelector('.bars-btn').addEventListener('click', ()=>{
    if (openMenu === true){
        let x = 100
        $('#menu-content').fadeOut();
        openMenu = false
        console.log(openMenu)
        
        closingMenu = setInterval(()=>{
            console.log(menuLeft +x)
            menu.style.left = (menuLeft + x) + '%' ;
            x--
           
            if ((menuLeft + x) === -101){
                clearInterval(closingMenu)
                document.querySelector('.order').style.visibility = 'visible';
                
            }
        }, '3');
    }
    else if (openMenu === false){
        let i = 0
        openMenu = true
        console.log(openMenu)
        menuOpacity=0
        document.querySelector('.order').style.visibility = 'hidden';
        openingMenu = setInterval(()=>{
            menu.style.left = (menuLeft + i) + '%' ;
            i++
            if ((menuLeft + i) === 1){
                clearInterval(openingMenu)
                $('#menu-content').fadeIn();
            }
        }, '3');
        openingMenuOpacity = setInterval(()=>{
            menu.style.opacity = menuOpacity
            menuOpacity += .1   
            if ((menuOpacity) >= 1.1){
                clearInterval(openingMenuOpacity)
            }
        }, '30');
        
    }
    
})
