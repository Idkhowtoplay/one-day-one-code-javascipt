const daftar = document.getElementById("daftar");
const tombol = document.getElementById("btnTambah");

tombol.addEventListener("click", () => {
    const itemBaru = document.createElement("li");
    itemBaru.textContent = `Item ${daftar.children.length + 1}`;
    daftar.appendChild(itemBaru);
});