const angka = [1, 2, 3, 4, 5];

// Array map 
const hasil = angka.map((num) => num * 2);
console.log("Hasil perkalian:", hasil);

// Array filter 
const genap = angka.filter((num) => num % 2 === 0);
console.log("Angka genap:", genap);

// Array reduce
const total = angka.reduce((acc, num) => acc + num, 0);
console.log("Total", total);