// Timer using requestAnimationFrame
function updateTimer() {
    const date = new Date();
    const time = date.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    document.getElementById('timer').textContent = time;
    requestAnimationFrame(updateTimer);
}

requestAnimationFrame(updateTimer);

// Theme switching with localStorage
const themeToggle = document.getElementById('lightDark');
const currentTheme = localStorage.getItem('theme') || 'dark';
document.getElementById('pageStyle').href = `style${currentTheme === 'dark' ? '1' : '2'}.css`;

themeToggle.addEventListener('click', () => {
    const currentStyle = document.getElementById('pageStyle').getAttribute('href');
    const newTheme = currentStyle === 'style1.css' ? 'light' : 'dark';
    
    document.getElementById('pageStyle').href = `style${newTheme === 'dark' ? '1' : '2'}.css`;
    localStorage.setItem('theme', newTheme);
});

// Improved menu handling
const menu = document.getElementById('menu');
const menuDialog = document.getElementById('huge');
const closeButton = document.getElementById('close');

function toggleMenu(show) {
    requestAnimationFrame(() => {
        menuDialog.style.display = show ? 'flex' : 'none';
        document.body.style.overflow = show ? 'hidden' : 'auto';
        
        if (show) {
            closeButton.focus();
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