
const navigation = document.querySelector('.navlinks');
const close = document.querySelector('.closebtn');
const open = document.querySelector('.openbtn');
const container = document.querySelector('#contingency');
const message = document.getElementById('contingency');
let hamburger = document.querySelector(".fa-bars");


const toggleSidebar = () => {
    navigation.classList.toggle('active');
    console.log(hamburger.classList[1]);
}

window.onkeyup = function (event) {
    if (event.keyCode == 27) {
        navigation.classList.remove('active');
        toggleIcon.classList.remove('active');
    }
}

const printWaitMessage = () => {
    container.append('Please wait.. the file you requested will begin to download shortly');
    message.innerHTML = "If the download doesn't start automatically, refresh this page and try again"
    console.log("If the download doesn't start automatically, refresh this page and try again");
}


