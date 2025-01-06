// Improved menu handling
const menu = document.getElementById('menu');
const menuDialog = document.getElementById('huge');
const closeButton = document.getElementById('close');

function toggleMenu(show) {
    requestAnimationFrame(() => {
        menuDialog.style.display = show ? 'flex' : 'none';
        document.body.style.overflow = show ? 'hidden' : 'auto';
        
        if (show) {
            // closeButton.focus();
        } else {
            menu.focus();
        }
    });
}

menu.addEventListener('click', () => toggleMenu(true));
closeButton.addEventListener('click', () => toggleMenu(false));



// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuDialog.style.display === 'flex') {
        toggleMenu(false);
    }
});