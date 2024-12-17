// Membalik urutan array 
const nama = ["satu", "dua", "tiga"];
const dibalik = nama.reverse();
console.log("Array dibalik:", dibalik);

// Membuat array dari teks 
const teks = "Belajar coding setiap hari";
const kata = teks.split(" ");
console.log("Array kata:", kata);

// Mencari elemen dengan find 
const angka = [1, 2, 3, 4, 5];
const lebihBesar = angka.find((num) => num > 3);
console.log("Angka pertama yang lebih besar dari 3:", lebihBesar);

// Menyusun array secara urut 
const angka1 = [5, 2, 8, 1, 3];
const diurutkan = angka1.sort((a, b) => a - b);
console.log("Array terurut:", diurutkan);

// Menghapus elemen duplikat 
const angka2 = [1, 2, 3, 2, 4, 1];
const unik = [...new Set(angka2)];
console.log("Array tanpa duplikat:", unik);

// Menggabungkan dua Array 
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const digabung = [...array1, ...array2];
console.log("Array gabungan:", digabung);

// Menghitung panjang array 
const kataa = ["Belajar", "coding", "setiap", "hari"];
console.log("Jumlah elemen dalam array:", kataa.length);








