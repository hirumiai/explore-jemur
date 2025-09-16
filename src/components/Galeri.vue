<template>
  <section class="section" id="galeri">
    <div class="container">
      <div class="gallery-header">
        <h2 class="section-title">Galeri</h2>
        <div class="tab-indicators">
          <div class="tab-dot" :class="{ active: activeTab === 0 }" @click="switchGalleryTab(0)"></div>
          <div class="tab-dot" :class="{ active: activeTab === 1 }" @click="switchGalleryTab(1)"></div>
        </div>
      </div>
      <p style="color: #6b7280; margin-bottom: 2rem;">Foto-foto terbaik dari Pulau Jemur</p>
      
      <div class="gallery-grid" id="galleryGrid">
        <div class="gallery-item" v-for="image in visibleImages" :key="image">
            <img :src="image" alt="Gallery image">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Simpan data gambar di sini
const galleryImages = [
    // Foto-foto untuk Tab 1
    [ "/img/jemur-1.jpg", "/img/jemur-2.jpg", "/img/jemur-3.jpg", "/img/jemur-4.jpeg" ],
    // Foto-foto untuk Tab 2
    [ "/img/jemur-5.jpg", "/img/jemur-6.jpg", "/img/jemur-7.jpg", "/img/jemur-8.jpg" ]
];

// State untuk melacak tab mana yang aktif
const activeTab = ref(0);

// Fungsi untuk mengganti tab
function switchGalleryTab(index) {
  activeTab.value = index;
}

// Komputasi gambar mana yang harus ditampilkan berdasarkan tab aktif
const visibleImages = computed(() => {
  return galleryImages[activeTab.value];
});
</script>