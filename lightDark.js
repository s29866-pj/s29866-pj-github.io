// Theme switching 
const themeToggle = document.getElementById('lightDark');
const currentTheme = localStorage.getItem('theme') || 'dark';
document.getElementById('pageStyle').href = `style${currentTheme === 'dark' ? '1' : '2'}.css`;

themeToggle.addEventListener('click', () => {
    const currentStyle = document.getElementById('pageStyle').getAttribute('href');
    const newTheme = currentStyle === 'style1.css' ? 'light' : 'dark';
    
    document.getElementById('pageStyle').href = `style${newTheme === 'dark' ? '1' : '2'}.css`;
    localStorage.setItem('theme', newTheme);
});