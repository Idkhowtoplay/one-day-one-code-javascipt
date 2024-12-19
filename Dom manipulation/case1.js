const judul = document.getElementById("judul");
const tombol = document.getElementById("btnWarna");

tombol.addEventListener("click", () => {
    judul.style.color = "blue";
    judul.style.backgroundColor = "yellow"
});