//  Mengubah semua huruf dalam array string menjadi huruf besar
function ubahKeHurufBesar(arr) {
    return arr.map((str) =>str.toUpperCase());
}

const kata = ["belajar", "coding", "setiap", "hari"];
console.log("Array huruf besar:", ubahKeHurufBesar(kata));

// Menyaring Nama-Nama yang Panjangnya Lebih dari 5 Karakter
function filterNamaPanjang(arr) {
    return arr.filter((nama) => nama.length > 5);
}

const nama = ["Andi", "Budi", "Christopher", "Diana", "Elizabeth"];
console.log("Nama panjang (> 5 karakter):", filterNamaPanjang(nama));

// Menghitung total harga dalam keranjang belanja
function hitungTotalHarga(hargaBarang) {
    return hargaBarang.reduce((total, harga) => total + harga, 0);
}

const keranjangBelanja = [15000, 25000, 30000, 10000];
console.log("Total harga:", hitungTotalHarga(keranjangBelanja));