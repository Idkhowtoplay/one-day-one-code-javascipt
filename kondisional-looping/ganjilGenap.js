const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan batas angka: ", (inputBatas) => {
    const batas = parseInt(inputBatas);

    console.log(`\n=== Angka Ganjil dan Genap dari 1 hingga ${batas} ===`);

    for (let i = 1; i <= batas; i++) {
      if (i % 2 === 0) {
        console.log(`${i} adalah angka Genap`);
      } else {
        console.log(`${i} adalah angka Ganjil`);
      }
    }

    rl.close();
});