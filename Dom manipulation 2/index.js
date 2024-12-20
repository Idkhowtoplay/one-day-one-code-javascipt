/* Mengubah konten elemen

-textContent
const elemen = document.getElementById("judul");
elemen.textContent = "Ini adalah teks baru!";

-innerHTML
const elemen = document.getElementById("konten");
elemen.innerHTML = "<b>Teks tebal</b> dengan HTML";

Menambahkan Event listener 

const tombol = document.getElementById("btn");
tombol.addEventListener("click", () => {
    alert("Tombol diklik");
    });

*/