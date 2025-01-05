function updateCountdown() {
    const currentYear = new Date().getFullYear();
    const birthday = new Date(`May 6, ${currentYear}`);
    const now = new Date();

    // If the birthday has passed this year, set it to next year
    if (now > birthday) {
        birthday.setFullYear(currentYear + 1);
    }

    const diff = birthday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();
