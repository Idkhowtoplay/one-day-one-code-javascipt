const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan suhu udara (dalam derajat Celsius): ', (inputSuhu) => {
    const suhu = parseInt(inputSuhu);

    if (suhu >= 30) {
        console.log("Cuaca panas! Jangan lupa minum banyak air.");
    } else if (suhu >= 20 && suhu < 30) {
        console.log("Cuaca sejuk. Nyaman untuk beraktivitas.");
    } else if (suhu >= 10 && suhu < 20) {
        console.log("Cuaca dingin. Kenakan jaket agar tidak kedinginan.");
    } else {
        console.log("Cuaca dingin! Hati-hati, tetap hangat.");
    }

    rl.close();
});
