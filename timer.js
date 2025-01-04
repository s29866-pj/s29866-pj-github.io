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