const teks = document.getElementById("teks");
const tombol = document.getElementById("btnToggle");

tombol.addEventListener("click", () => {
    if (teks.style.display === "none") {
        teks.style.display = "block";
    } else {
        teks.style.display = "none";
    }
});