
const navigation = document.querySelector('.navlinks');
const toggleIcon = document.querySelector('.toggle-btn');

const toggleSidebar = () => {
    console.log('clicked');
    navigation.classList.toggle('active');
    toggleIcon.classList.toggle('active');
}

window.onkeyup = function (event) {
    if (event.keyCode == 27) {
        navigation.classList.remove('active');
        toggleIcon.classList.remove('active');
    }
}

const submitMessage = () => {
    document.getElementById('success').innerHTML = 'Your message has been sent'
}

const printWaitMessage = () => {
    var container = document.querySelector('.getmyportfolio');
    container.append('Please wait.. the file you requested will begin to download shortly');
}