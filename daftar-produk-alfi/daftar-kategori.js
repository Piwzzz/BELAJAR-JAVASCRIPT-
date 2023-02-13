function tambahKategori(form) {
    console.log(form);
    aplikasiDaftarKategori.inputKategori(form);
    aplikasiDaftarKategori.menampilkanDaftarKategori();
}

const aplikasiDaftarKategori = {
    kategori: {
        index: -1,
        namaKategori: null 
    },
    daftarKategori: [],
    inputKategori: function (form) {
        this.kategori.index = form.index.value;
        this.kategori.namaKategori = form.namaKategori.value;

        if(!this.kategori.namaKategori) {
           alert ('nama kategori tidak boleh kosong!!!');
           return false;
        }
        if(this.kategori.index == -1) {
            this.daftarKategori.push(copy(this.kategori)); 
        } else {
            this.daftarKategori[this.kategori.index] = copy(this.kategori)
        }

        this.resetFormKategori(form);
    },
    resetFormKategori: function(form) {
        this.kategori.namaKategori = null,
        this.kategori.index = -1

        form.namaKategori.value = this.kategori.namaKategori;
        form.index.value = this.kategori.index;

        document.getElementById('btn-save-kategori').innerHTML = 'Tambah';
    },
    menampilkanDaftarKategori: function() {
        const componentDaftarKategori = document.getElementById('daftar-kategori');
        componentDaftarKategori.innerHTML = '';
        this.daftarKategori.forEach((kategori, index) => {
            componentDaftarKategori.innerHTML += `<li>${kategori.namaKategori}</li><button onclick="aplikasiDaftarKategori.editKategori(${index})">edit</button><button onclick="aplikasiDaftarKategori.hapusKategori(${index})">hapus</button>`;
        });

    },
    hapusKategori: function(index) {
        if(confirm ('Apakah anda yakin ingin menghapus data ini ?')) {
            this.daftarKategori.splice(index, 1);
            this.menampilkanDaftarKategori();
        }
    },
    editKategori: function(index) {
        const kategori = this.daftarKategori[index];
        const form = document.getElementById('form-kategori');
        form.namaKategori.value = kategori.namaKategori;
        form.index.value = kategori.index;

        document.getElementById('btn-save-kategori').innerHTML = 'Edit';
    }
}

function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
