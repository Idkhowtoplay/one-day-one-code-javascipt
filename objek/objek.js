const orang = {
    nama: "Andi",
    umur: 25,
    sapa: function() {
        return `Halo, nama saya ${this.nama}`;
    }
};

/*Mengakses properti
Dot notation: orang.nama -> "Andi"
Bracket notation: orang["nama"] -> "Andi"

Memanggil method
console.log(orang.sapa());
*/ 