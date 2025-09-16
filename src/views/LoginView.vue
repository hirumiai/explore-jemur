<template>
  <div class="auth-container">
    <div class="auth-card">
      <h2>Selamat Datang Kembali!</h2>
      <p>Masuk untuk melanjutkan petualanganmu.</p>

      <form @submit.prevent="handleLogin">
        <div class="form-field">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Masukkan email Anda" required>
        </div>
        <div class="form-field">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Masukkan password Anda" required>
        </div>

        <button type="submit" class="auth-btn">Masuk</button>
      </form>

      <div class="switch-auth">
        Belum punya akun? <RouterLink to="/register">Daftar di sini</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
function handleLogin() {
  // Nanti di sini kita akan tambahkan logika untuk mengirim data login ke backend
  alert('Logika login belum diimplementasikan.');
}
</script>

<style>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 80px; /* Memberi jarak dari header */
  background-color: #f9fafb; /* Warna latar yang soft */
}
.auth-card {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  text-align: center;
}
.auth-card h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}
.auth-card p {
  color: #6b7280;
  margin-bottom: 2rem;
}
.auth-btn {
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}
.auth-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(124, 58, 237, 0.3);
}
.switch-auth {
  margin-top: 1.5rem;
  color: #6b7280;
  font-size: 0.9rem;
}
.switch-auth a {
  color: #7c3aed;
  font-weight: 600;
  text-decoration: none;
}
</style>
