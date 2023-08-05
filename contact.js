const contactBtn = document.querySelectorAll('.contact-btn')
const contactDiv = document.querySelector('.contact')

console.log(contactBtn)
for (var i=0;i< contactBtn.length; i++){
    contactBtn[i].addEventListener('click', ()=>{
        $('.contact').fadeIn();
        console.log('click')
    })

}
document.querySelector('.cross-btn-contact').addEventListener('click', function() {
    $('.contact').fadeOut();
})