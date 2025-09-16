<template>
  <div class="account-page">
    <div class="account-sidebar"></div>

    <main class="account-content">
      <div class="content-wrapper">
        <header class="account-header">
          <h1>Informasi Akun</h1>
          <a href="#" class="edit-icon" title="Edit Informasi">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          </a>
        </header>

        <section class="info-box">
          <div class="info-row">
            <span class="info-label">Nama</span>
            <span class="info-colon">:</span>
            <span class="info-value">{{ user.name }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Email</span>
            <span class="info-colon">:</span>
            <span class="info-value">{{ user.email }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Rencana Perjalanan</span>
            <span class="info-colon">:</span>
            <span class="info-value">{{ user.tripPlan }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Riwayat Penyakit</span>
            <span class="info-colon">:</span>
            <span class="info-value">{{ user.healthHistory }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Alergi Makanan</span>
            <span class="info-colon">:</span>
            <span class="info-value">{{ user.foodAllergy }}</span>
          </div>
        </section>

        <section class="status-section">
          <h2 class="section-title">Status Pembayaran</h2>
          <span class="status-badge" :class="paymentStatusClass">{{ user.paymentStatus }}</span>
        </section>

        <section class="review-section">
          <h2 class="section-title">Tulis Ulasan</h2>
          <div
            class="star-rating"
            @mouseleave="starLeave"
          >
            <span
              v-for="star in 5"
              :key="star"
              class="star"
              :class="{ 'active': star <= (hoverRating || rating) }"
              @mouseover="starHover(star)"
              @click="setRating(star)"
            >
              ★
            </span>
          </div>
          <textarea v-model="reviewText" class="review-textarea" placeholder="Bagaimana pengalaman trip Anda bersama kami?"></textarea>
          <button class="submit-button" @click="submitReview">Kirim</button>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Data reaktif untuk informasi pengguna
const user = ref({
  name: 'Rahayu Safitri',
  email: 'rahayusaf@gmail.com',
  tripPlan: '22 September 2025 - 25 September 2025',
  healthHistory: 'Gerd',
  foodAllergy: 'Udang',
  paymentStatus: 'Lunas'
});

// State untuk form ulasan
const rating = ref(3); // Nilai rating yang sudah di-klik
const hoverRating = ref(0); // Nilai rating saat mouse hover
const reviewText = ref('');

// Computed property untuk class badge pembayaran
const paymentStatusClass = computed(() => {
  return user.value.paymentStatus.toLowerCase();
});

// Fungsi untuk rating bintang
function setRating(starNumber) {
  rating.value = starNumber;
}
function starHover(starNumber) {
  hoverRating.value = starNumber;
}
function starLeave() {
  hoverRating.value = 0;
}

// Fungsi untuk tombol kirim ulasan
function submitReview() {
  if (!reviewText.value) {
    alert('Mohon isi ulasan Anda terlebih dahulu.');
    return;
  }
  alert(`Ulasan terkirim!\nRating: ${rating.value} bintang\nPesan: ${reviewText.value}`);
  // Reset form
  rating.value = 0;
  reviewText.value = '';
}
</script>

<style scoped>
.account-page {
  display: flex;
  min-height: 100vh;
  background-color: #ffffff;
}

.account-sidebar {
  flex-basis: 30%;
  background-image: url('https://images.unsplash.com/photo-1507525428034-b723a9ce6890?auto=format&fit=crop&w=800&q=80');
  background-size: cover;
  background-position: center;
}

.account-content {
  flex-basis: 70%;
  padding: 4rem 5rem;
  overflow-y: auto;
}

.content-wrapper {
  max-width: 700px;
}

.account-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 2.5rem;
}

.account-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
}

.edit-icon {
  color: #4a5568;
  transition: color 0.3s ease;
}

.edit-icon:hover {
  color: #7c3aed;
}

.info-box {
  background-color: #c084fc; /* Warna ungu dari desain */
  border-radius: 12px;
  padding: 1.5rem 2rem;
  margin-bottom: 2.5rem;
}

.info-row {
  display: flex;
  align-items: center;
  color: #2d3748;
  font-size: 1rem;
  margin-bottom: 1rem;
}
.info-row:last-child {
  margin-bottom: 0;
}

.info-label {
  flex-basis: 35%;
  font-weight: 500;
}

.info-colon {
  margin: 0 10px;
}

.info-value {
  flex-basis: 65%;
  font-weight: 400;
}

.section-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 1rem;
}

.status-section {
  margin-bottom: 2.5rem;
}

.status-badge {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  color: white;
}
.status-badge.lunas {
  background-color: #34d399; /* Warna hijau */
}
.status-badge.pending {
  background-color: #fbbf24; /* Contoh jika status lain */
}

.review-section {
  margin-bottom: 2.5rem;
}

.star-rating {
  display: flex;
  gap: 5px;
  margin-bottom: 1rem;
}

.star {
  font-size: 2.5rem;
  cursor: pointer;
  color: #d1d5db; /* Warna bintang non-aktif */
  transition: color 0.2s ease, transform 0.2s ease;
}

.star.active {
  color: #f59e0b; /* Warna bintang aktif (kuning) */
}

.star:hover {
    transform: scale(1.2);
}

.review-textarea {
  width: 100%;
  min-height: 120px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  margin-bottom: 1.5rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.review-textarea:focus {
  outline: none;
  border-color: #7c3aed;
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
}

.submit-button {
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  background-color: #4f46e5; /* Warna biru dari desain */
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.submit-button:hover {
  background-color: #4338ca;
  transform: translateY(-2px);
}

/* --- Responsive --- */
@media (max-width: 1024px) {
  .account-page {
    flex-direction: column;
  }
  .account-sidebar {
    flex-basis: 300px; /* Tinggi tetap untuk sidebar di mobile */
    width: 100%;
  }
  .account-content {
    padding: 2rem;
  }
}
</style>
