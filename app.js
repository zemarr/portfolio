const toggleSidebar = () => {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('toggleline').classList.toggle('active');
    document.getElementById('toggleline').classList.toggle('hidden')
}

const closeSidebar = () => {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('toggleline').classList.toggle('active'); 
}