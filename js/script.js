
//JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP
function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}
else{
document.querySelector('body').classList.add('no-webp');
}
});



// adaptive menu
const btnMenu = document.querySelector('.burger');
const menu = document.querySelector('.adaptive-menu');
const toggleMenu = function() {
    menu.classList.toggle('adaptive-menu_active');
}

btnMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains('adaptive-menu_active');
    
    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});


//slider01
$(document).ready(function(){
    $('.slider01').slick({
        arrows:true,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing:'linear',
        draggable:true,
        variableWidth:false,
    });
});

//slider02
$(document).ready(function(){
    $('.slider02').slick({
        arrows:false,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing:'linear',
        draggable:true,
        variableWidth:false,
    });
});

// Tabs
let tab; // заголовок вкладки
let tabContent; // блок содержащий контент вкладки
 
window.onload=function() {
    tabContent=document.getElementsByClassName('facts__tabContent');
    tab=document.getElementsByClassName('facts__tab');
    hideTabsContent(1);  // передаем 1 для того чтобы 0 елемент остался на странице
}


function hideTabsContent(a) {
    for (let i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('facts__tabContent_show');
        tabContent[i].classList.add("facts__tabContent_hide");
    }
}

document.getElementById('tabs').onclick= function (event) {
    let target=event.target;
    if (target.className =='facts__tab' || target.parentElement.className == 'facts__tab') {
       for (let i=0; i<tab.length; i++) {
           if (target == tab[i] || target.parentElement == tab[i]) {
               showTabsContent(i);  // как только узнаем на какой tab был клик, останавливаем цыкл и передаем значение в функцию
               break;
}}}}


function showTabsContent(b){
    if (tabContent[b].classList.contains('facts__tabContent_hide')) {
        hideTabsContent(0);  // скрываем все tabContents 
        tabContent[b].classList.remove('facts__tabContent_hide');
        tabContent[b].classList.add('facts__tabContent_show');
    }
}



// scroll
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
}