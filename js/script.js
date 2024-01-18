document.addEventListener("DOMContentLoaded", function () {
  // Fungsi untuk menghitung luas persegi
  function hitungLuasPersegi(sisi) {
    return sisi * sisi;
  }

  // Fungsi untuk menghitung keliling persegi
  function hitungKelilingPersegi(sisi) {
    return 4 * sisi;
  }

  // Menangkap elemen tombol "Hitung" untuk luas
  var tombolHitungLuas = document.querySelector(".container-luas .tombol-hitung");

  // Menambahkan event listener untuk tombol "Hitung" luas
  tombolHitungLuas.addEventListener("click", function () {
    // Menangkap nilai sisi dari input
    var inputSisi = document.querySelector(".container-luas input[name='jawab-luas']").value;

    //pengecekan
    if(isNaN(inputSisi)){
        alert("Mohon isi angka yang benar !");
        return;
    }

    // Menghitung luas persegi
    var luas = hitungLuasPersegi(parseFloat(inputSisi));

    // Menampilkan hasil luas
    document.querySelector(".container-luas .hasil-luas").innerText = "Luas Persegi: " + luas;

    //menghapus input
    document.querySelector(".container-luas input[name='jawab-luas']").value = "";
  });

  // Menangkap elemen tombol "Hitung" untuk keliling
  var tombolHitungKeliling = document.querySelector(".keliling .tombol-hitung");

  // Menambahkan event listener untuk tombol "Hitung" keliling
  tombolHitungKeliling.addEventListener("click", function () {
    // Menangkap nilai sisi dari input
    var inputSisi = document.querySelector(".keliling input[name='jawab-keliling']").value;

    //pengecekan
    if(!inputSisi){
        alert("Mohon isi angka yang benar !");
        return;
    }

    if(isNaN(inputSisi)){
        alert("Mohon isi angka yang benar !");
        return;
    }

    // Menghitung keliling persegi
    var keliling = hitungKelilingPersegi(parseFloat(inputSisi));

    // Menampilkan hasil keliling
    document.querySelector(".keliling .hasil-keliling").innerText = "Keliling Persegi: " + keliling;

    //menghapus input
    document.querySelector(".keliling input[name='jawab-keliling']").value = "";
  });
});

