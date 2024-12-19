const waktu = document.getElementById("waktu");
const tombol = document.getElementById("btnWaktu");

tombol.addEventListener("click", () => {
    const now = new Date();
    waktu.textContent = `waktu saat ini: ${now.toLocaleTimeString()}`;
});