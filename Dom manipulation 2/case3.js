const inputTugas = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

btnTambah.addEventListener("click", () => {
    const tugasBaru = inputTugas.value;
    if (tugasBaru.trim() !== "") {
        const itemBaru = document.createElement("li");
        itemBaru.textContent = tugasBaru;
        daftarTugas.appendChild(itemBaru);
        inputTugas.value = "";
    } else {
        alert("Masukkan tugas terlebih dahulu!")
    }
});