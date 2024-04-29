window.addEventListener('scroll',() => {
  document.querySelector('nav').classList.toggle('window-scrolled',widnow.scrollY > 0);
})
const textbuttons = document.querySelectorAll('.contact__btn');

textbuttons.forEach(textbutton => {
let text = textbutton.querySelector('p');
text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform:rotate(${index * 12}deg)">${character}</span>`).join('');

// Add padding to the containing element
text.style.padding = '0 20px'; // Adjust the padding as needed
});
var swiper = new Swiper(".myswiper", {
slidesPerView: 1,
spaceBetween: 20,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
breakpoints:{
  599:{
    slidesPerView: 2,
    spaceBetween:40

  },
  1023:{
    slidesPerView: 3,
    spaceBetween:60
  }
}
});

const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-btn');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () =>{
  nav.style.display= 'flex';
  openNavBtn.style.display ='none'
  closeNavBtn.style.display ='inline-block';
}
openNavBtn.addEvent('click',openNav);
const closeNav = () =>{
  nav.style.display= 'none';
  openNavBtn.style.display ='inline-block'
  closeNavBtn.style.display ='none';
}
closeNavBtn.addEvent('click',closeNav);

if(document.body.clientWidth < 1024){
  nav.querySelectorAll('li a').forEach(navLink => {
    navLink.addEventListener('click',closeNav);
  })
}