
const navigation = document.querySelector('.navlinks');
const toggleIcon = document.querySelector('.toggle-btn');
const container = document.querySelector('#contingency');
const message = document.getElementById('contingency')

const toggleSidebar = () => {
    navigation.classList.toggle('active');
    toggleIcon.classList.toggle('active');
    console.log('toggle sidebar');
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


