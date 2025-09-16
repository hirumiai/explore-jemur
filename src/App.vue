<template>
  <Header v-if="showLayout" />

  <RouterView :key="route.fullPath" />

  <Footer v-if="showLayout" />
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

// Mengambil informasi rute saat ini
const route = useRoute();

// Daftar nama rute di mana Header & Footer akan disembunyikan
const hiddenLayoutRoutes = [
  'Login',
  'Register',
  'PesanTrip',
  'Success',
  'BlogDetail',
  'Account'
];

// Computed property yang akan bernilai true atau false
const showLayout = computed(() => {
  if (!route.name) return true;
  return !hiddenLayoutRoutes.includes(route.name);
});
</script>
