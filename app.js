
const navigation = document.querySelector('.navlinks');
const close = document.querySelector('.closebtn');
const open = document.querySelector('.openbtn');
const container = document.querySelector('#contingency');
const message = document.getElementById('contingency');
let hamburger = document.querySelector(".fa-bars");


const toggleSidebar = () => {
    navigation.classList.toggle('active');
}

window.onkeyup = function (event) {
    if (event.keyCode == 27) {
        navigation.classList.remove('active');
    }
}

const closeDropdown = () => {
    navigation.classList.remove('active');
}

const printWaitMessage = () => {
    container.append('Please wait.. the file you requested will begin to download shortly');
    message.innerHTML = "If the download doesn't start automatically, refresh this page and try again"
    console.log("If the download doesn't start automatically, refresh this page and try again");
}

let windowScroll = () => {
    if (window.scrollY == 1) {
        body.style.backgroundColor = 'green';
    }
    console.log(windows.scroll);
}

const body = document.getElementsByTagName('body');
body.onscroll = function () { navShadow() };

function navShadow() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $('.fixed-nav').css('box-shadow', '0px 2px 15px -5px rgba(0,0,0,0.75)');
    } else {
        $('.fixed-nav').css('box-shadow', 'none');
    }
}
