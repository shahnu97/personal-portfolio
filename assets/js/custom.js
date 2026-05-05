//Hamburger Click JS
function hamburger() {
    var icon = document.getElementById('menuLinks');
    if (icon.style.display === 'block'){
        icon.style.display = 'none';
    } else{
        icon.style.display = 'block';
    }
}

function themeChange() {
    var element = document.body;
    element.classList.toggle('dark-mode');
}