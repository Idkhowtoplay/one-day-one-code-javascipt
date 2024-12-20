const teks = document.getElementById("teks");
const pilihWarna = document.getElementById("pilihWarna");

pilihWarna.addEventListener("change", () => {
    teks.style.color = pilihWarna.value;
});
