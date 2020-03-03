
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