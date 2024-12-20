const btnHitung = document.getElementById("btnHitung");
const hasil = document.getElementById("hasil");
let jumlahKlik = 0;

btnHitung.addEventListener("click", () => {
    jumlahKlik++;
    hasil.textContent = `Tombol telah diklik sebanyak ${jumlahKlik} kali.`;
});

