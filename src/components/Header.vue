<template>
  <header :class="{ 'header-hidden': !isHeaderVisible }">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <img src="/img/logo.png" alt="Logo Dapuan Travel">
        </div>

        <nav class="desktop-nav">
          <a href="#beranda">Beranda</a>
          <a href="#tentang">Tentang</a>
          <a href="#blog">Blog</a>
          <a href="#galeri">Galeri</a>
          <a href="#kontak">Kontak</a>
        </nav>

        <div class="header-right">
          <div class="language-selector">
            <span>Indonesia</span>
            <span>▼</span>
          </div>
          <a href="#" class="btn-primary">Gabung</a>
          <button class="mobile-menu-btn" @click="toggleMobileMenu">☰</button>
        </div>
      </div>
    </div>

    <div class="mobile-nav" :class="{ 'active': isMobileNavActive }">
      <a href="#beranda">Beranda</a>
      <a href="#tentang">Tentang</a>
      <a href="#blog">Blog</a>
      <a href="#galeri">Galeri</a>
      <a href="#kontak">Kontak</a>
      <a href="#" class="btn-primary">Gabung</a>
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
  } else {
    isHeaderVisible.value = true; // Scroll ke atas
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
};

// --- Logika untuk Menu Mobile (BARU) ---
const isMobileNavActive = ref(false);

function toggleMobileMenu() {
  isMobileNavActive.value = !isMobileNavActive.value;
}

// --- Lifecycle Hooks untuk Event Scroll ---
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
