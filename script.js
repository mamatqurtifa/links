function updateClock() {
    const now = new Date();
    const offset = now.getTimezoneOffset() + 420; // GMT+7 offset
    now.setMinutes(now.getMinutes() + offset);

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Dapatkan lebar layar saat ini
    const screenWidth = window.innerWidth;

    // Cek apakah lebar layar kurang dari 400px
    if (screenWidth < 365) {
        document.getElementById('clock').innerHTML = `${hours}<br>${minutes}`;
    }
    // Kondisi 2: Lebar layar antara 365px dan 400px
    else if (screenWidth < 400) {
        document.getElementById('clock').innerHTML = `${hours}<br>${minutes}<br>${seconds}`;
    }
    // Kondisi 3: Lebar layar lebih dari 400px
    else {
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    }
}

// Update jam setiap detik
setInterval(updateClock, 1000);
updateClock();

// Tambahkan event listener untuk memantau perubahan ukuran layar
window.addEventListener('resize', updateClock);