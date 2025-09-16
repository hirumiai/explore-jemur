<template>
  <Header />
  <main>
    <Hero />
    <Tentang />
    <Blog />
    <Galeri />
    <Testimoni />
    <CTA />
  </main>
  <Footer />
</template>

<script setup>
// Impor semua komponen yang sudah dibuat
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Tentang from './components/Tentang.vue'
import Blog from './components/Blog.vue'
import Galeri from './components/Galeri.vue'
import Testimoni from './components/Testimoni.vue'
import CTA from './components/CTA.vue'
import Footer from './components/Footer.vue'
</script>
