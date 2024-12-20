const judul = document.getElementById("judul");
const tombol = document.getElementById("btnUbah");

tombol.addEventListener("click", () => {
    judul.textContent = "Teks Baru!";
});