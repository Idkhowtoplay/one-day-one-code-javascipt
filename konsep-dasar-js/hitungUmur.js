const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan tahun lahir anda: ', (tahunLahir) => {
    const tahunSekarang = new Date().getFullYear();

    const umur = tahunSekarang - tahunLahir;

    console.log(`Umur Anda adalah ${umur} tahun.`);

    rl.close
});