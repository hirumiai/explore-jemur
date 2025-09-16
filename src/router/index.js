import { createRouter, createWebHistory } from 'vue-router';

// --- Impor semua komponen halaman (views) ---
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import TripView from '../views/TripView.vue';
import SuccessView from '../views/SuccessView.vue';
import AccountView from '../views/AccountView.vue';
import BlogDetailView from '../views/BlogDetailView.vue';

// --- Definisikan semua rute aplikasi ---
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/pesan-trip',
    name: 'PesanTrip',
    component: TripView
  },
  {
    path: '/sukses',
    name: 'Success',
    component: SuccessView
  },
  {
    path: '/akun',
    name: 'Account',
    component: AccountView
  },
  {
    // Ini adalah rute dinamis untuk detail artikel blog
    path: '/blog/:slug',
    name: 'BlogDetail',
    component: BlogDetailView
  }
];

// --- Buat instance router ---
const router = createRouter({
  history: createWebHistory(),
  routes,

  // --- Fungsi untuk mengatur posisi scroll saat navigasi ---
  scrollBehavior(to, from, savedPosition) {
    // Jika URL tujuan memiliki hash (contoh: /#tentang), scroll ke elemen tersebut
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    // Jika pengguna menekan tombol "back", kembali ke posisi scroll sebelumnya
    else if (savedPosition) {
      return savedPosition;
    }
    // Jika pindah ke halaman baru, scroll ke paling atas
    else {
      return { top: 0, behavior: 'smooth' };
    }
  },
});

export default router;
