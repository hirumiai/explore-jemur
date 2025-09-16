<template>
  <div class="success-page-wrapper">
    <div class="background-container"></div>

    <div class="success-container">
      <div class="success-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11" stroke="white" stroke-width="2"/>
          <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h1 class="success-title">Selamat Kamu<br>Berhasil Terdaftar!</h1>
      <p class="success-subtitle">explorejemur.com</p>
    </div>
  </div>
</template>

<script setup>
// Tidak ada JavaScript yang dibutuhkan untuk halaman ini
</script>

<style scoped>
/* --- CSS Reset & Basic Setup --- */
.success-page-wrapper {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  height: 100vh;
  overflow: hidden;
  background-color: #111;
  position: relative;
}

/* --- Background --- */
.background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1541890283-53e778426943?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.background-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Lapisan gelap */
}

/* --- Konten Utama --- */
.success-container {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 20px;
}

/* --- Ikon Ceklis --- */
.success-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 30px;
  animation: pop-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* --- Teks Judul dan Subjudul --- */
.success-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 15px;
  animation: fade-in-up 0.8s ease-out 0.2s both;
}

.success-subtitle {
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  opacity: 0.8;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  animation: fade-in-up 0.8s ease-out 0.4s both;
}

/* --- Animasi --- */
@keyframes pop-in {
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes fade-in-up {
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/* --- Responsive Design --- */
@media (max-width: 768px) {
  .success-icon {
    width: 70px;
    height: 70px;
  }
}
</style>
