// Membuat objek mahasiswa
const mahasiswa = {
    nama: "Emanon",
    umur: 20,
    jurusan: "Teknik Informatika",
    perkenalkan: function() {
        return `Halo, saya ${this.nama}, berumur ${this.umur} tahun.`;
    }
};

console.log(mahasiswa.perkenalkan());

// Menghitung usia dari tanggal lahir
const orang = {
    nama: "Emanon",
    tanggalLahir: "2000-05-15",
    hitungUmur: function() {
        const sekarang = new Date();
        const tahunLahir = new Date(this.tanggalLahir).getFullYear();
        return sekarang.getFullYear() - tahunLahir;
    }
};

console.log(`Usia ${orang.nama}:`, orang.hitungUmur());

// Menambahkan dan menghapus properti
const buku = {
    judul: "The Forgotten King",
    penulis: "Emanon",
};
// Menambahkan Properti baru 
buku.tahunTerbit = 2022;

// Menghapus properti penulis 
delete buku.penulis;

console.log(buku);

// Menggunkan objek dalam array 
const daftarBuku = [
    { judul: "Buku A", penulis: "Lain", tahunTerbit: 1999 }, 
    { judul: "Buku B", penulis: "Emanon", tahunTerbit: 2005 }, 
    { judul: "Buku C", penulis: "Juan", tahunTerbit: 2010 }, 
];

function cariBukuTerbitSetelah(tahun) {
    return daftarBuku.filter(buku => buku.tahunTerbit > tahun);
}

console.log("Buku terbit setelah tahun 2000:", cariBukuTerbitSetelah(2000));

// Menampilkan daftar properti dan nilai 
const produk = {
    nama: "Laptop",
    harga: 15000000,
    stok: 10
};

function cetakProperti(obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

cetakProperti(produk);

// Membuat metode untuk mengupdate stok 
const produkk = {
    nama: "Mouse",
    stok: 50,
    updateStok: function(jumlah) {
        this.stock += jumlah;
        return this.stok;
    }
};

console.log("Stok awal:", produkk.stok);
console.log("Stok setelah ditambahkan 20:", produkk.updateStok(20));
console.log("Stok setelah dikurangi 10:", produkk.updateStok(-10));

// Menyimpan data mahasiswa 
const universitas = {
    nama: "Universitas",
    lokasi: "Jakarta",
    daftarMahasiswa: [],
    tambahMahasiswa: function(namaMahasiswa) {
        this.daftarMahasiswa.push(namaMahasiswa);
    }
};

universitas.tambahMahasiswa("Emanon");
universitas.tambahMahasiswa("Promothean");

console.log("Daftar mahasiswa:", universitas.daftarMahasiswa);

// Membuat objek nested 
const kelas = {
    namaKelas: "Kelas Pemrograman",
    pengajar: {
        nama: "Emanon",
        umur: 30
    },
    infoKelas: function() {
        return `Kelas: ${this.namaKelas}, Pengajar: ${this.pengajar.nama}`;
    }
};

console.log(kelas.infoKelas());

// Menghitung total harga produk 
const keranjangBelanja = [
    { nama: "Produk A", harga: 50000 },
    { nama: "Produk B", harga: 100000 },
    { nama: "Produk C", harga: 150000 },
];

function hitungTotalHarga(keranjang) {
    return keranjang.reduce((total, produk) => total + produk.harga, 0);
}

console.log("Total harga:", hitungTotalHarga(keranjangBelanja));

// Membuat objek dinamis 
function buatOrang(nama, umur) {
    return {
        nama: nama,
        umur: umur,
        perkenalkan: function() {
            return `Halo, saya ${this.nama}, berumur ${this.umur} tahun.`;
        }
    };
}

const orang1 = buatOrang("Citra", 22);
console.log(orang1.perkenalkan());