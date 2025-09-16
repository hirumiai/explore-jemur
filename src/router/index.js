import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import TripView from '../views/TripView.vue' // <-- 1. IMPOR FILE BARU
import SuccessView from '../views/SuccessView.vue' // <-- 1. IMPOR FILE BARU


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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  //Fungsi ini akan membuat halaman selalu scroll ke paling atas saat berpindah halaman
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
