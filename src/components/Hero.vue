<template>
 <section class="hero" id="beranda">
        <div class="container">
            <div class="hero-content">
                <h1>Jelajahi Pulau Jemur,<br>Surga Tersembunyi Di Riau!</h1>
                <p>Temukan keindahan alam yang memukau dan pengalaman tak terlupakan</p>
                
                <div class="search-form">
                    <div class="form-grid">
                        <div class="form-field">
                            <label>Dari Kota</label>
                            <input type="text" placeholder="Pilih kota asal">
                        </div>
                        <div class="form-field">
                            <label>Ke Destinasi</label>
                            <input type="text" placeholder="Pulau Jemur">
                        </div>
                        <div class="form-field">
                            <label>Tanggal Berangkat</label>
                            <input type="date">
                        </div>
                        <div class="form-field">
                            <label>Jumlah Orang</label>
                            <select>
                                <option>1 Orang</option>
                                <option>2 Orang</option>
                                <option>3-5 Orang</option>
                                <option>6+ Orang</option>
                            </select>
                        </div>
                    </div>
                    <button class="search-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
                        🔎 Cari Perjalanan
                    </button>
                </div>
            </div>
        </div>
        
        <div class="scroll-indicator">
            <div class="mouse">
                <div class="scroll-dot"></div>
            </div>
        </div>
    </section>
</template>