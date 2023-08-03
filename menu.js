const menuBtn = document.querySelector('.bars-btn')
var menuOpen = false

const navMenu = document.querySelector('.nav-menu')
const menuContent = document.querySelector(('#menu-content'))

var navLeft = -100

menuBtn.addEventListener('click', ()=>{
    if (!menuOpen){
        let x = 0;
        menuOpen = true;
        
        var openMenuLoop =setInterval(()=>{
            
            navMenu.style.left = navLeft + x +'%';
            x++
            if (x=== 51){
                $('#menu-content').fadeIn()
            }
            if (x === 101){
                clearInterval(openMenuLoop);
                
            }
            console.log(x)
        }, '5')
    }
    else if (menuOpen){
        let x = 100
        menuOpen = false
        var closingMenuLoop = setInterval(()=>{
            navMenu.style.left = navLeft + x + '%';
            x--  
            if (x == 50){
                $('#menu-content').fadeOut()
            }          
            if(x === -1){
                
                clearInterval(closingMenuLoop)
            }
        }, '5')
    }
})