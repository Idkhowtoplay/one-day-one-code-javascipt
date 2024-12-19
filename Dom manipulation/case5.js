const inputItem = document.getElementById("inputItem");
const daftar = document.getElementById("daftar");
const tombol = document.getElementById("btnTambah");

tombol.addEventListener("click", () => {
    const nilai = inputItem.value;
    if (nilai.trim() !== "") {
        const itemBaru = document.createElement("li");
        itemBaru.textContent = nilai;
        daftar.appendChild(itemBaru);
        inputItem.value = "";
    } else {
        alert("Mohon masukkan teks!");
    }
});