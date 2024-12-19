// Mengakses elemen dengan ID 
const judul = document.getElementById("judul");

// Mengakses elemen dengan class 
const deskripsi = document.querySelector(".deskripsi");

// Mengakses tombol dan menambahkan event 
const tombol = document.getElementById("ubahTeks");

tombol.addEventListener("click", () => {
    // Mengubah teks elemen 
    judul.textContent = "Halo Dunia";
    deskripsi.textContent = "Text paragraf ini telah diubah melalui JavaScript";
    alert("Text berhasil diubah");
});