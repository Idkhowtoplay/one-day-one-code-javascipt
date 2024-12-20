const gambar = document.getElementById("gambar");
const btnSebelum = document.getElementById("btnSebelum");
const btnSesudah = document.getElementById("btnSesudah");

const daftarGambar = ["gambar1.jpg", "gambar2.jpg", "gambar3.jpg"];
let index = 0;

btnSesudah.addEventListener("click", () => {
    index = (index + 1) % daftarGambar.length;
    gambar.src = daftarGambar[index];
});

btnSebelum.addEventListener("click", () => {
    index = (index - 1 + daftarGambar.length) % daftarGambar.length;
    gambar.src = daftarGambar[index];
});