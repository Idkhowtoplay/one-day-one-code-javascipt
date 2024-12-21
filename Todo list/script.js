const inputTugas = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");
const btnHapusSemua = document.getElementById("btnHapusSemua");
const btnSimpan = document.getElementById("btnSimpan");
const btnMuat = document.getElementById("btnMuat");
const daftarTugas = document.getElementById("daftarTugas");

btnTambah.addEventListener("click", () => {
    const tugasBaru = inputTugas.value.trim();
    if (tugasBaru !== "") {
        const itemBaru = document.createElement("li");
        itemBaru.textContent = tugasBaru;

        const btnHapus = document.createElement("button");
        btnHapus.textContent = "delete";
        btnHapus.style.marginLeft = "10px";

        btnHapus.addEventListener("click", () => {
            daftarTugas.removeChild(itemBaru);
        });

        itemBaru.addEventListener("click", () => {
            itemBaru.style.textDecoration =
                itemBaru.style.textDecoration === "line-through" ? "none" : "line-through";              
        });

        itemBaru.appendChild(btnHapus);
        daftarTugas.appendChild(itemBaru);
        inputTugas.value = "";
    } else {
        alert("Masukkan tugas terlebih dahulu!");
    }
});

btnHapusSemua.addEventListener("click", () => {
    daftarTugas.innerHTML = "";
});

btnSimpan.addEventListener("click", () => {
    const semuaTugas = [];
    const items = daftarTugas.querySelectorAll("li");
    items.forEach((item) => {
        semuaTugas.push({
            teks: item.firstChild.textContent,
            selesai: item.style.textDecoration === "line-through",
        });
    });
    localStorage.setItem("daftarTugas", JSON.stringify(semuaTugas));
    alert("Daftar tugas disimpan");
});

btnMuat.addEventListener("click", () => {
    const dataTersimpan = JSON.parse(localStorage.getItem("daftarTugas"));
    if (dataTersimpan) {
        daftarTugas.innerHTML = "";
        dataTersimpan.forEach((tugas) => {
            const itemBaru = document.createElement("li");
            itemBaru.textContent = tugas.teks;

            if (tugas.selesai) {
                itemBaru.style.textDecoration = "line-through";
            }

            const btnHapus = document.createElement("button");
            btnHapus.textContent = "Hapus";
            btnHapus.style.marginLeft = "10px";

            btnHapus.addEventListener("click", () => {
                daftarTugas.removeChild(itemBaru);
            });
           
            itemBaru.addEventListener("click", () => {
                daftarTugas.removeChild(itemBaru);
            });

            itemBaru.addEventListener("click",() => {
                itemBaru.style.textDecoration =
                   itemBaru.style.textDecoration === "line-through" ? "none" : "line-through";
            });

            itemBaru.appendChild(btnHapus);
            daftarTugas.appendChild(itemBaru);
        });
    } else {
        alert("Tidak ada daftar tugas yang tersimpan!")
    }
});
