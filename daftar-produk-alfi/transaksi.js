function tambahTransaksi(form) {
    console.log(form);
    aplikasiDaftarTransaksi.inputTransaksi(form);
    aplikasiDaftarTransaksi.menampilkanDaftarTransaksi();
}

const aplikasiDaftarTransaksi = {
    transaksi: {
        index: -1,
        namaProduk: null,
        hargaProduk: null,
        stokProduk: null,
        linkGambarProduk: null,
        jumlah: null,
        totalHarga: null,
        tunai: null,
        kembalian: null 
    },
    daftarTransaksi: [],
    inputTransaksi: function (form) {
        this.transaksi.index = form.index.value;
        this.transaksi.namaProduk = form.namaProduk.value;
        this.transaksi.hargaProduk = form.hargaProduk.value;
        this.transaksi.stokProduk = form.stokProduk.value;
        this.transaksi.jumlah = form.jumlah.value;
        this.transaksi.totalHarga =form.totalHarga.value;
        this.transaksi.tunai =form.tunai.value;
        this.transaksi.kembalian =form.kembalian.value;

        if(!this.transaksi.namaProduk) {
            alert('Nama produk tidak boleh kosong!');
            return false;
        }

        if(!this.transaksi.hargaProduk) {
            alert('Harga produk tidak boleh kosong!');
            return false;
        }

        if(!this.transaksi.stokProduk) {
            alert('Stok produk tidak boleh kosong!');
            return false;
        } 
        if(!this.transaksi.linkGambarProduk) {
            alert('Link gambar produk tidak boleh kosong!');
            return false;
        }
        if(!this.transaksi.jumlah) {
            alert('Jumlah tidak boleh kosong!');
            return false;
        }
        if(!this.transaksi.totalHarga) {
            alert('Total harga tidak boleh kosong!');
            return false;
        }
        if(!this.transaksi.tunai) {
            alert('Tunai tidak boleh kosong!');
            return false;
        }
        if(!this.transaksi.kembalian) {
            alert('Kembalian tidak boleh kosong!');
            return false;
        }
        if(this.transaksi.index == -1) {
            this.daftarTransaksi.push(copy(this.transaksi));
        } else {
            this.daftarTransaksi[this.transaksi.index] = copy(this.transaksi)
        }

        this.resetFormTransaksi(form);
    },
    resetFormTransaksi: function (form) {
        this.transaksi.namaProduk = null;
        this.transaksi.hargaProduk = null;
        this.transaksi.stokProduk = null;
        this.transaksi.linkGambarProduk = null;
        this.transaksi.jumlah = null;
        this.transaksi.totalHarga = null;
        this.transaksi.tunai = null;
        this.transaksi.kembalian = null;
        this.transaksi.index = -1;

        form.namaProduk.value = this.transaksi.namaProduk;
        form.hargaProduk.value = this.transaksi.hargaProduk;
        form.stokProduk.value = this.transaksi.stokProduk;
        form.linkGambarProduk.value = this.transaksi.linkGambarProduk;
        form.jumlah.value = this.transaksi.jumlah;
        form.totalHarga.value = this.transaksi.totalHarga;
        form.tunai.value = this.transaksi.tunai;
        form.kembalian.value = this.transaksi.kembalian;
        form.index.value = this.transaksi.index;
    },
    menampilkanDaftarTransaksi: function () {
        const componentDaftarTransaksi = document.getElementById('daftar-transaksi');
        componentDaftarTransaksi.innerHTML = '';
        this.daftarTransaksi.forEach((transaksi, index) => {
            componentDaftarTransaksi.innerHTML += `<li>${transaksi.namaProduk}</li> <br> <li>${transaksi.hargaProduk}</li> <br> <li>${transaksi.stokProduk}</li> <br> ${transaksi.jumlah} <br> ${transaksi.totalHarga} <br> ${transaksi.tunai} <br> ${transaksi.kembalian} <br> <img src="${transaksi.linkGambarProduk}" width="105" height="110">`
        });
    }
}

function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
}