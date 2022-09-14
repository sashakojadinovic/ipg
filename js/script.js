let lastScrollTop = 0;
window.addEventListener("scroll", function(){
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if(st>lastScrollTop){
    //console.log(window.pageYOffset);
    if(window.pageYOffset>0){
      document.querySelector('.header-wrapper').classList.remove('scrolling-up');
      document.querySelector('.header-wrapper').classList.add('scrolling-down');
    }
  }
  else{
    document.querySelector('.header-wrapper').classList.remove('scrolling-down');
    document.querySelector('.header-wrapper').classList.add('scrolling-up');
  }
  lastScrollTop = st <= 0 ? 0 : st
});
const menuBtn = document.querySelector('#hamburger-menu button.menu');
const closeBtn = document.querySelector('#hamburger-menu button.close');
const mobileMenuBgrnd = document.querySelector('#mobile-menu-bgrnd');
const mobileMenu = document.querySelector('header nav');

var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById('nav');
var blue = document.getElementById("blue");

icon.addEventListener('click', function() {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  nav.classList.toggle('show');
  blue.classList.toggle('slide');
});
