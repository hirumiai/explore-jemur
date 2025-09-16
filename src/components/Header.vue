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
          <RouterLink to="/#tentang">Tentang</RouterLink>
          <RouterLink to="/#blog">Blog</RouterLink>
          <RouterLink to="/#galeri">Galeri</RouterLink>
          <RouterLink to="/#kontak">Kontak</RouterLink>
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
      <RouterLink to="/#tentang" @click="closeMobileMenu">Tentang</RouterLink>
      <RouterLink to="/#blog" @click="closeMobileMenu">Blog</RouterLink>
      <RouterLink to="/#galeri" @click="closeMobileMenu">Galeri</RouterLink>
      <RouterLink to="/#kontak" @click="closeMobileMenu">Kontak</RouterLink>
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
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

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
