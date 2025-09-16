<template>
  <header :class="{ 'header-hidden': !isHeaderVisible }">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <RouterLink to="/">
            <img src="/img/logo.png" alt="Logo Explore Jemur">
          </RouterLink>
        </div>

        <nav class="desktop-nav">
          <RouterLink to="/">Beranda</RouterLink>
          <a href="/#tentang">Tentang</a>
          <a href="/#blog">Blog</a>
          <a href="/#galeri">Galeri</a>
          <a href="/#kontak">Kontak</a>
        </nav>

        <div class="header-right">
          <div class="language-selector">
            <span>Indonesia</span>
            <span>▼</span>
          </div>
          <RouterLink to="/login" class="btn-primary">Login</RouterLink>
          <button class="mobile-menu-btn" @click="toggleMobileMenu">☰</button>
        </div>
      </div>
    </div>

    <div class="mobile-nav" :class="{ 'active': isMobileNavActive }">
      <RouterLink to="/" @click="closeMobileMenu">Beranda</RouterLink>
      <a href="/#tentang" @click="closeMobileMenu">Tentang</a>
      <a href="/#blog" @click="closeMobileMenu">Blog</a>
      <a href="/#galeri" @click="closeMobileMenu">Galeri</a>
      <a href="/#kontak" @click="closeMobileMenu">Kontak</a>
      <RouterLink to="/login" class="btn-primary" @click="closeMobileMenu">Login</RouterLink>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// --- Logika untuk Auto-Hide Header ---
const isHeaderVisible = ref(true);
let lastScrollTop = 0;

const handleScroll = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    isHeaderVisible.value = false; // Scroll ke bawah
    isMobileNavActive.value = false; // Otomatis tutup menu mobile saat scroll
  } else {
    isHeaderVisible.value = true; // Scroll ke atas
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
};

// --- Logika untuk Menu Mobile ---
const isMobileNavActive = ref(false);

function toggleMobileMenu() {
  isMobileNavActive.value = !isMobileNavActive.value;
}

function closeMobileMenu() {
  isMobileNavActive.value = false;
}

// --- Lifecycle Hooks untuk Event Scroll ---
// Memasang event listener saat komponen pertama kali dimuat
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Melepas event listener saat komponen dihancurkan (untuk mencegah memory leak)
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Menambahkan style agar logo bisa di-klik */
.logo a {
  display: flex;
  align-items: center;
}
</style>
