function hitungLuasPersegi(sisi) {
    return sisi * sisi;
}

console.log("Luas persegi dengan sisi 5 adalah:", hitungLuasPersegi(5));

function cekGanjilGenap(angka) {
    if (angka % 2 === 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}

console.log("Angka 7 adalah:", cekGanjilGenap(7));
console.log("Angka 10 adalah:", cekGanjilGenap(10));

function hitungFaktorial(n) {
    if (typeof n !== "number" || n < 0) {
        return "Error: Input harus angka positif";
    }
    let hasil = 1;
    for (let i = 1; i <= n; i++) {
        hasil *= i;
    }
    return hasil;
}

console.log("Faktorial dari 5 adalah:", hitungFaktorial(-5));

function hitungRataRata(angkaArray) {
    let total = 0;
    for (let i = 0; i < angkaArray.length; i++) {
        total += angkaArray[i];
    }
    return total / angkaArray.length;
}

console.log("Rata-rata dari [2, 4, 6, 8] adalah:", hitungRataRata([2, 4, 6, 8]));

function kapitalisasiNama(nama) {
    const namaArray = nama.split(" ");
    for (let i = 0; i < namaArray.length; i++) {
        namaArray[i] = namaArray[i][0].toUpperCase() + namaArray[i].slice(1);
    }
    return namaArray.join(" ");
}

console.log("Nama setelah dikapitalisasi:", kapitalisasiNama("emanon lol"));

