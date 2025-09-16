<template>
  <div>
    <div class="background-container"></div>

    <div class="floating-elements">
      <div class="floating-shape shape1"></div>
      <div class="floating-shape shape2"></div>
      <div class="floating-shape shape3"></div>
    </div>

    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <p>{{ loadingMessage }}</p>
      </div>
    </div>

    <div class="content-container">
      <RouterLink to="/" class="back-button">
        <span class="back-arrow">←</span>
        Kembali
      </RouterLink>

      <div class="main-content">
        <div ref="formContainer" class="booking-form-container">
          <h1 class="form-title">Pesan Trip Ini</h1>
          <p class="form-subtitle">
            Silakan lengkapi form dibawah ini untuk melanjutkan pendaftaran trip ke Pulau Jemur yang indah dan nikmati petualangan serunya!
          </p>

          <form @submit.prevent="handleBooking">
            <div class="form-group input-icon icon-person">
              <input v-model="form.name" type="text" class="form-input" placeholder="Nama" required>
            </div>
            <div class="form-group input-icon icon-email">
              <input v-model="form.email" type="email" class="form-input" placeholder="Email" required>
            </div>
            <div class="form-group">
              <select v-model="form.participants" class="form-select" required>
                <option value="">Jumlah Orang</option>
                <option v-for="n in 10" :key="n" :value="n">{{ n }} Orang</option>
                <option value="10+">10+ Orang</option>
              </select>
            </div>
            <div class="form-group input-icon icon-phone">
              <input v-model="form.phone" type="tel" class="form-input" placeholder="No HP" required>
            </div>
            <div class="form-group input-icon icon-calendar">
              <input v-model="form.departureDate" type="date" class="form-input" :min="today" required>
            </div>
            <div class="form-group input-icon icon-calendar">
              <input v-model="form.returnDate" type="date" class="form-input" :min="minReturnDate" required>
            </div>
            <div class="form-group input-icon icon-message">
              <textarea v-model="form.message" class="form-textarea" placeholder="Pesan terkait riwayat penyakit atau alergi makanan"></textarea>
            </div>
            <div class="button-group">
              <button type="button" class="btn btn-primary" @click="checkPayment">Cek Pembayaran</button>
              <button type="submit" class="btn btn-secondary">Pesan</button>
            </div>
          </form>
        </div>

        <div ref="quoteSection" class="quote-section">
          <div class="quote-text">
            "Rasakan petualangan seru tak terlupakan bersama kami!"
          </div>
          <div class="quote-source">
            explorejemur.com
          </div>
        </div>
      </div> </div> </div> </template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

// --- State Management ---
const form = ref({
  name: '',
  email: '',
  participants: '',
  phone: '',
  departureDate: '',
  returnDate: '',
  message: ''
});

const isLoading = ref(false);
const loadingMessage = ref('');
const today = new Date().toISOString().split('T')[0];

// Template refs untuk animasi
const formContainer = ref(null);
const quoteSection = ref(null);

// --- Computed Properties ---
const minReturnDate = computed(() => {
  if (!form.value.departureDate) return today;
  const departure = new Date(form.value.departureDate);
  departure.setDate(departure.getDate() + 1);
  return departure.toISOString().split('T')[0];
});

// --- Methods ---
function showMessage(message, type = 'success') {
  alert(`[${type.toUpperCase()}] ${message}`);
}

function showLoading(message) {
  loadingMessage.value = message;
  isLoading.value = true;
}

function hideLoading() {
  isLoading.value = false;
}

function checkPayment() {
  if (!form.value.name) {
    return showMessage('Silakan isi nama terlebih dahulu untuk mengecek pembayaran!', 'error');
  }
  showLoading('Mengecek status pembayaran...');
  setTimeout(() => {
    hideLoading();
    showMessage(`Belum ada pembayaran yang tercatat atas nama ${form.value.name}`, 'info');
  }, 2000);
}

function handleBooking() {
  const departureDate = new Date(form.value.departureDate);
  const returnDate = new Date(form.value.returnDate);
  if (returnDate <= departureDate) {
    return showMessage('Tanggal kepulangan harus setelah tanggal keberangkatan!', 'error');
  }

  showLoading('Memproses pemesanan Anda...');
  setTimeout(() => {
    hideLoading();
    showMessage(`Pemesanan berhasil untuk ${form.value.name}! Kami akan menghubungi Anda segera.`, 'success');
    form.value = { name: '', email: '', participants: '', phone: '', departureDate: '', returnDate: '', message: '' };
  }, 3000);
}

// --- Lifecycle Hooks ---
onMounted(() => {
  document.body.style.overflow = 'hidden';

  const formEl = formContainer.value;
  const quoteEl = quoteSection.value;

  if (formEl && quoteEl) {
    formEl.style.transform = 'translateY(50px)';
    formEl.style.opacity = '0';
    quoteEl.style.transform = 'translateX(50px)';
    quoteEl.style.opacity = '0';

    setTimeout(() => {
      formEl.style.transition = 'all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)';
      formEl.style.transform = 'translateY(0)';
      formEl.style.opacity = '1';

      quoteEl.style.transition = 'all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) 0.2s';
      quoteEl.style.transform = 'translateX(0)';
      quoteEl.style.opacity = '1';
    }, 100);
  }
});

onUnmounted(() => {
  document.body.style.overflow = 'auto';
});
</script>

<style scoped>
/* SEMUA CSS DARI KODE ASLI DIMASUKKAN DI SINI */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.background-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
        linear-gradient(
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.3)
        ),
        url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="water" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23006994;stop-opacity:1" /><stop offset="50%" style="stop-color:%23228B8D;stop-opacity:1" /><stop offset="100%" style="stop-color:%234682B4;stop-opacity:1" /></linearGradient><linearGradient id="boat" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23D2691E;stop-opacity:1" /><stop offset="50%" style="stop-color:%23CD853F;stop-opacity:1" /><stop offset="100%" style="stop-color:%23F4A460;stop-opacity:1" /></linearGradient></defs><rect fill="url(%23water)" width="1200" height="800"/><path fill="%232F4F4F" d="M0 600c200-50 400-30 600 0s400 50 400 0v200H0z"/><ellipse fill="url(%23boat)" cx="600" cy="400" rx="200" ry="80"/><rect fill="%23654321" x="500" y="360" width="200" height="40"/><rect fill="%238B4513" x="580" y="320" width="40" height="40"/><circle fill="%23FF6347" cx="520" cy="380" r="8"/><circle fill="%2332CD32" cx="680" cy="380" r="8"/><circle fill="%23FFD700" cx="600" cy="350" r="6"/></svg>');
    background-size: cover;
    background-position: center;
    filter: blur(1px);
    z-index: -1;
}

.content-container {
    position: relative;
    z-index: 1;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 20px 40px;
}
.back-button {
    position: absolute;
    top: 40px;
    left: 40px;
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 10px 20px;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    z-index: 10;
}

.back-button:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-5px);
}

.back-arrow {
    margin-right: 12px;
    font-size: 20px;
}

.main-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    gap: 40px;
}

.booking-form-container {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    border-radius: 25px;
    padding: 40px;
    width: 100%;
    max-width: 480px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.form-title {
    color: #2d3748;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 15px;
}

.form-subtitle {
    color: #4a5568;
    font-size: 14px;
    text-align: center;
    margin-bottom: 35px;
    line-height: 1.5;
}

.form-group {
    margin-bottom: 20px;
}

.form-input, .form-select, .form-textarea {
    width: 100%;
    padding: 15px 20px;
    border: none;
    border-radius: 12px;
    font-size: 15px;
    background: white;
    color: #333;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.form-input:focus, .form-select:focus, .form-textarea:focus {
    outline: none;
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.form-input::placeholder, .form-textarea::placeholder {
    color: #a0aec0;
}

.form-select {
    cursor: pointer;
    appearance: none;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6,9 12,15 18,9"></polyline></svg>');
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 16px;
    padding-right: 45px;
}

.form-textarea {
    resize: vertical;
    min-height: 100px;
    max-height: 150px;
    font-family: inherit;
}

.input-icon {
    position: relative;
}

.input-icon::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    z-index: 1;
    pointer-events: none;
}

.input-icon input {
    padding-left: 45px;
}

.icon-person::before {
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23666" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>') no-repeat center;
    background-size: 16px;
}

.icon-email::before {
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23666" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>') no-repeat center;
    background-size: 16px;
}

.icon-phone::before {
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23666" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>') no-repeat center;
    background-size: 16px;
}

.icon-calendar::before {
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23666" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>') no-repeat center;
    background-size: 16px;
}

.icon-message::before {
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23666" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>') no--repeat center;
    background-size: 16px;
}

.button-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 30px;
}

.btn {
    width: 100%;
    padding: 15px 25px;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
}

.btn-secondary {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(240, 147, 251, 0.4);
}

.btn-secondary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(240, 147, 251, 0.5);
}

.quote-section {
    color: white;
    max-width: 500px;
    text-align: right;
}

.quote-text {
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 25px;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}

.quote-source {
    font-size: 18px;
    opacity: 0.9;
    font-style: italic;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}

.floating-elements {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
}

.floating-shape {
    position: absolute;
    opacity: 0.1;
    animation: float 6s ease-in-out infinite;
}

.shape1 {
    top: 20%;
    left: 10%;
    width: 60px;
    height: 60px;
    background: white;
    border-radius: 50%;
    animation-delay: 0s;
}

.shape2 {
    top: 70%;
    right: 15%;
    width: 40px;
    height: 40px;
    background: white;
    transform: rotate(45deg);
    animation-delay: -2s;
}

.shape3 {
    bottom: 10%;
    left: 5%;
    width: 80px;
    height: 80px;
    background: white;
    border-radius: 20px;
    animation-delay: -4s;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-20px) rotate(5deg);
    }
}

.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(10px);
}

.loading-content {
    text-align: center;
    color: #333;
}

.loading-spinner {
    width: 50px;
    height: 50px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid #667eea;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 20px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@media (max-width: 992px) {
    .main-content {
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    .quote-section {
        text-align: center;
        margin-top: 40px;
    }
}

@media (max-width: 768px) {
    .booking-form-container {
        width: 90%;
        max-width: 400px;
        padding: 30px 25px;
    }

    .quote-section {
        max-width: 90%;
    }

    .quote-text {
        font-size: 28px;
    }

    .back-button {
        top: 20px;
        left: 20px;
        font-size: 16px;
        padding: 8px 15px;
    }
}
</style>
