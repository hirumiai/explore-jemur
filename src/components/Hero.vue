<template>
  <section class="hero" id="beranda">
    <div class="container">
      <div class="hero-content">
        <h1>Jelajahi Pulau Jemur,<br>Surga Tersembunyi Di Riau!</h1>
        <p>Temukan keindahan alam yang memukau dan pengalaman tak terlupakan</p>

        <div class="search-form">
          <div class="form-grid">
            <div class="form-field">
              <label>Dari Kota</label>
              <input v-model="searchData.fromCity" type="text" placeholder="Pilih kota asal">
            </div>
            <div class="form-field">
              <label>Ke Destinasi</label>
              <input v-model="searchData.destination" type="text" placeholder="Pulau Jemur">
            </div>
            <div class="form-field">
              <label>Tanggal Berangkat</label>
              <input v-model="searchData.departureDate" type="date">
            </div>
            <div class="form-field">
              <label>Jumlah Orang</label>
              <select v-model="searchData.participants">
                <option>1 Orang</option>
                <option>2 Orang</option>
                <option>3-5 Orang</option>
                <option>6+ Orang</option>
              </select>
            </div>
          </div>
          <button class="search-btn" @click="searchTrip">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="white" fill-opacity="0.3"></circle></svg>
            Cari Perjalanan
          </button>
        </div>
      </div>
    </div>

    <div class="scroll-indicator">
      <div class="mouse">
        <div class="scroll-dot"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 1. Membuat "wadah" reaktif untuk menampung data dari form
const searchData = ref({
  fromCity: '',
  destination: 'Pulau Jemur', // Nilai default
  departureDate: '',
  participants: '1 Orang' // Nilai default
});

// 2. Mendapatkan akses ke instance router
const router = useRouter();

// 3. Fungsi yang dijalankan saat tombol di-klik
function searchTrip() {
  // Validasi sederhana: pastikan kota asal sudah diisi
  if (!searchData.value.fromCity.trim()) {
    alert('Silakan isi kota asal terlebih dahulu!');
    return; // Hentikan fungsi jika kota asal kosong
  }

  // Gunakan router.push untuk pindah halaman dengan membawa data
  router.push({
    name: 'PesanTrip', // Nama route dari file src/router/index.js
    query: {
      // Data ini akan muncul di URL sebagai query parameters
      dari: searchData.value.fromCity,
      tujuan: searchData.value.destination,
      tanggal: searchData.value.departureDate,
      jumlah: searchData.value.participants
    }
  });
}
</script>

<style scoped>
/* Tidak ada style khusus untuk komponen ini karena semua sudah di-handle di style.css global */
</style>
