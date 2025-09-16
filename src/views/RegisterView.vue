<template>
  <div class="auth-container">
    <div class="auth-card">
      <h2>Buat Akun Baru</h2>
      <p>Daftar sekarang dan mulai jelajahi surga tersembunyi!</p>

      <form @submit.prevent="handleRegister">
        <div class="form-field">
          <label for="name">Nama Lengkap</label>
          <input type="text" id="name" placeholder="Masukkan nama Anda" required>
        </div>
        <div class="form-field">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Masukkan email Anda" required>
        </div>
        <div class="form-field">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Buat password Anda" required>
        </div>

        <button type="submit" class="auth-btn">Daftar</button>
      </form>

      <div class="switch-auth">
        Sudah punya akun? <RouterLink to="/login">Masuk di sini</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
function handleRegister() {
  // Nanti di sini kita akan tambahkan logika untuk mengirim data registrasi ke backend
  alert('Logika registrasi belum diimplementasikan.');
}
</script>
