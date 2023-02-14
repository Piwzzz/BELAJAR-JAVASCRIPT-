function tambahKonsumen(form) {
    console.log(form);
    aplikasiKonsumen.inputKonsumen(form);
    aplikasiKonsumen.menampilkanDaftarKonsumen();
}

const aplikasiKonsumen = {
    konsumen: {
        index: -1,
        nama: null,
        alamat: null,
        noHP: null,
        email: null

    },
    daftarKonsumen: [],
    inputKonsumen: function (form) {
       this.konsumen.index = form.index.value;
       this.konsumen.nama = form.nama.value;
       this.konsumen.alamat = form.alamat.value;
       this.konsumen.noHP = form.noHP.value;

       if(!this.konsumen.nama) {
           alert('Nama tidak boleh kosong!');
           return false;
       }

       if(!this.konsumen.alamat) {
        alert('Alamat tidak boleh kosong!');
        return false;
       }

       if(!this.konsumen.noHP) {
        alert('No hp tidak boleh kosong!');
        return false;
       }

       if(!this.konsumen.email) {
        alert('Email tidak boleh kosong!');
        return false;
       }
       if(this.konsumen.index == -1) {
           this.daftarKonsumen.push(copy(this.konsumen));
       } else {
            this.daftarKonsumen[this.konsumen.index] = copy(this.konsumen)
       }
      
       this.resetFormKonsumen(form);
    },
    resetFormKonsumen: function (form) {
        this.konsumen.nama = null;
        this.konsumen.alamat = null;
        this.konsumen.noHP = null;
        this.konsumen.email = null;
        this.konsumen.index = -1;

        form.nama.value = this.konsumen.nama;
        form.alamat.value = this.konsumen.alamat;
        form.noHP.value = this.konsumen.noHP;
        form.email.value = this.konsumen.email;
        form.index.value = this.konsumen.index;

        document.getElementById('btn-save-konsumen').innerHTML = 'Tambah';
    },
    menampilkanDaftarKonsumen: function () {
        const componentDaftarKonsumen = document.getElementById('konsumen');
        componentDaftarKonsumen.innerHTML = '';
        this.daftarKonsumen.forEach((konsumen, index)  => {
            componentDaftarKonsumen.innerHTML  += `<li>${konsumen.nama}</li> <br> <li>${konsumen.alamat}</li> <br> <li>${konsumen.noHP}</li> <br> <li>${konsumen.email}</><button onclick="aplikasiDaftarKonsumen.editKonsumen(${index})">edit</button><button onclick="aplikasiDaftarKonsumen.hapusKonsumen(${index})">hapus</button>`;
        });
    },
    hapusKonsumen: function (index) {
        if(confirm('Apakah anda yakin ingin menghapus data ini?')) {
           this.daftarKonsumen.splice(index, 1);
           this.menampilkanDaftarKonsumen();
        }
    },
    editKonsumen: function (index) {
        const konsumen = this.daftarKonsumen[index];
        const form = document.getElementById('form-konsumen');
        form.nama.value = konsumen.nama;
        form.alamat.value = konsumen.alamat;
        form.noHP.value = konsumen.noHP;
        form.email.value = konsumen.email;
        form.index.value = index;

        document.getElementById('btn-save-konsumen').innerHTML = 'Edit';
    }
}

function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
}