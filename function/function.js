// function sederhana
function sapa1() {
    console.log("Halo, Selamat Pagi!");
}

sapa1();



// function dengan parameter
function sapaNama(nama) {
  console.log(`Halo, ${nama}! selamat Pagi.`);
}

sapaNama("Budi");
sapaNama("Sari");

// function dengan return value
function tambah(a, b) {
    return a + b;
}

const hasil = tambah(3, 4);
console.log("Hasil penjumlahan:", hasil);

// function dengan default parameter
function sapa(nama = "Pengunjung") {
    console.log(`Halo, ${nama}!`);
}

sapa();
sapa("Andi");

// function tanpa return
function cetakPesan(pesan) {
    console.log("Pesan:", pesan);
}

cetakPesan("Belajar JavaScipt itu menyenangkan!");
