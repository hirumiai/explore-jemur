<template>
  <div class="blog-page">
    <div class="page-content">
      <RouterLink to="/" class="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        <span>Kembali ke Beranda</span>
      </RouterLink>

      <article class="article-container">
        <div class="article-header">
          <h1 class="article-title">{{ article.title }}</h1>
          <div class="article-meta">
            <span>Oleh {{ article.author }}</span>
            <span class="separator">·</span>
            <span>{{ article.publishedDate }}</span>
            <span class="separator">·</span>
            <span>{{ article.readTime }}</span>
          </div>
        </div>

        <figure class="article-image">
          <img :src="article.imageUrl" alt="Blog hero image">
        </figure>

        <section class="article-body" v-html="article.content"></section>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const article = ref({
  title: 'Antara Sumatera dan Malaka',
  author: 'Lennon',
  publishedDate: '16 September 2025',
  readTime: '4 menit baca',
  imageUrl: '/img/blog.jpg',
  content: `<p>Hai semua! Aku punya cerita seru nih tentang petualangan baruku yang ingin kubagikan. Aku ingin mengajakmu merasakan langsung pesona tak terlupakan dari Pulau Jemur, sebuah surga tersembunyi yang bersemayam anggun, seolah malu-malu di antara hamparan luas Sumatera dan sibuknya Selat Malaka.</p><p>Bersiaplah terhipnotis total oleh keindahan alamnya yang masih begitu perawan; dari pasir putih lembut yang memeluk birunya laut, hingga kekayaan bawah laut yang menanti untuk dijelajahi. Dan tak hanya itu, ikut aku menyelami jejak-jejak sejarah masa lalu Perang Dunia II yang tersimpan rapi di setiap sudutnya, membuat setiap langkah di pulau ini terasa penuh makna.</p>`
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,700;1,400&display=swap');

.blog-page {
  display: flex;
  justify-content: center;
  background-color: #f9fafb;
  min-height: 100vh;
  padding: 4rem 2rem;
  width: 100%;
}

.page-content {
  width: 100%;
  max-width: 800px;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #4b5563;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 2.5rem;
  transition: color 0.3s ease;
  font-family: 'Inter', sans-serif;
}

.back-button:hover {
  color: #7c3aed;
}

.article-container {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  padding: 3rem 4rem;
}

.article-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.article-title {
  font-family: 'Inter', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  color: #1f2937;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.article-meta {
  color: #6b7280;
  font-family: 'Inter', sans-serif;
}

.article-meta .separator {
  margin: 0 0.5rem;
}

.article-image {
  margin-bottom: 2.5rem;
}

.article-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.article-body {
  font-family: 'Lora', serif;
  font-size: 1.15rem;
  line-height: 1.8;
  color: #374151;
}

.article-body :deep(p) {
  margin-bottom: 1.5rem;
}

.article-body :deep(p:first-of-type::first-letter) {
  font-size: 4rem;
  font-weight: 700;
  color: #1f2937;
  float: left;
  line-height: 0.8;
  margin-right: 0.75rem;
  margin-top: 0.25rem;
}

/* Responsive */
@media (max-width: 768px) {
  .blog-page {
    padding: 2rem 1rem;
  }
  .article-container {
    padding: 2rem 1.5rem;
  }
  .article-title {
    font-size: 2.25rem;
  }
  .article-body {
    font-size: 1.1rem;
  }
}
</style>
