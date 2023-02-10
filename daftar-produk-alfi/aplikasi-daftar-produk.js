function tambahProduk(form) {
    console.log(form);
    aplikasiDaftarProduk.inputProduk(form);
    aplikasiDaftarProduk.menampilkanDaftarProduk();
}

const aplikasiDaftarProduk = {
    produk: {
        index: -1,
        namaProduk: null,
        hargaProduk: null,
        stokProduk: null,
        linkGambarProduk: null

    },
    daftarProduk: [],
    inputProduk: function (form) {
        this.produk.index = form.index.value;
        this.produk.namaProduk = form.namaProduk.value;
        this.produk.hargaProduk = form.hargaProduk.value;
        this.produk.stokProduk = form.stokProduk.value;
        this.produk.linkGambarProduk =form.linkGambarProduk.value;

        if(!this.produk.namaProduk) {
            alert('Nama produk tidak boleh kosong!');
            return false;
        }

        if(!this.produk.hargaProduk) {
            alert('Harga produk tidak boleh kosong!');
            return false;
        }

        if(!this.produk.stokProduk) {
            alert('Stok produk tidak boleh kosong!');
            return false;
        } 
        if(!this.produk.linkGambarProduk) {
            alert('Link gambar produk tidak boleh kosong!');
            return false;
        }
        if(this.produk.index == -1) {
            this.daftarProduk.push(copy(this.produk));
        } else {
            this.daftarProduk[this.produk.index] = copy(this.produk)
        }

        this.resetFormProduk(form);
    },
    resetFormProduk: function (form) {
        this.produk.namaProduk = null;
        this.produk.hargaProduk = null;
        this.produk.stokProduk = null;
        this.produk.linkGambarProduk = null;
        this.produk.index = -1;

        form.namaProduk.value = this.produk.namaProduk;
        form.hargaProduk.value = this.produk.hargaProduk;
        form.stokProduk.value = this.produk.stokProduk;
        form.linkGambarProduk.value = this.produk.linkGambarProduk;
        form.index.value = this.produk.index;

        document.getElementById('btn-save-produk').innerHTML = 'Tambah';
    },
    menampilkanDaftarProduk: function () {
        const componentDaftarProduk = document.getElementById('daftar-produk');
        componentDaftarProduk.innerHTML = '';
        this.daftarProduk.forEach((produk, index) => {
            componentDaftarProduk.innerHTML += `<li>${produk.namaProduk}</li> <br> <li>${produk.hargaProduk}</li> <br> <li>${produk.stokProduk}</li> <br>  <img src="${produk.linkGambarProduk}" width="105" height="110"><button onclick="aplikasiDaftarProduk.editProduk(${index})">edit</button><button onclick="aplikasiDaftarProduk.hapusProduk(${index})">hapus</button>`;
        });
    },
    hapusProduk: function (index) {
        if(confirm('Apakah anda yakin ingin menghapus data ini ?')) {
            this.daftarProduk.splice(index, 1);
            this.menampilkanDaftarProduk();
        }
    },
    editProduk: function (index) {
        const produk = this.daftarProduk[index];
        const form = document.getElementById('form-produk');
        form.namaProduk.value = produk.namaProduk;
        form.hargaProduk.value = produk.hargaProduk;
        form.stokProduk.value = produk.stokProduk;
        form.linkGambarProduk.value = produk.linkGambarProduk;
        form.index.value = index;

        document.getElementById('btn-save-produk').innerHTML = 'Edit';
    }
}

function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
}