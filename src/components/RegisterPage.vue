<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kembali - Registration</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            height: 100vh;
            display: flex;
            overflow: hidden;
        }

        .left-section {
            flex: 1;
            background: linear-gradient(135deg,
                rgba(139, 69, 19, 0.8) 0%,
                rgba(75, 0, 130, 0.8) 50%,
                rgba(255, 140, 0, 0.8) 100%),
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><rect fill="%23228B8D" width="1000" height="600"/><path fill="%23006994" d="M0 400c200-50 400-30 600 0s400 50 400 0v200H0z"/><circle fill="%232F4F4F" cx="800" cy="350" r="80"/><rect fill="%23654321" x="750" y="330" width="100" height="100"/></svg>');
            background-size: cover;
            background-position: center;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 60px;
        }

        .back-button {
            position: absolute;
            top: 30px;
            left: 30px;
            display: flex;
            align-items: center;
            color: white;
            text-decoration: none;
            font-size: 18px;
            font-weight: 500;
            cursor: pointer;
            transition: opacity 0.3s ease;
        }

        .back-button:hover {
            opacity: 0.8;
        }

        .back-arrow {
            margin-right: 15px;
            font-size: 24px;
        }

        .quote-section {
            color: white;
            max-width: 500px;
        }

        .quote-text {
            font-size: 48px;
            font-weight: bold;
            line-height: 1.2;
            margin-bottom: 40px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .quote-source {
            font-size: 16px;
            opacity: 0.9;
            font-style: italic;
        }

        .right-section {
            width: 450px;
            background: white;
            padding: 80px 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-shadow: -10px 0 30px rgba(0,0,0,0.1);
        }

        .form-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .runner-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 30px;
            background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }

        .runner-icon::before {
            content: '🏃‍♂️';
            font-size: 32px;
        }

        .form-title {
            font-size: 32px;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-input {
            width: 100%;
            padding: 15px 20px;
            border: 2px solid #e0e0e0;
            border-radius: 12px;
            font-size: 16px;
            transition: all 0.3s ease;
            background: #f8f9fa;
        }

        .form-input:focus {
            outline: none;
            border-color: #9c27b0;
            background: white;
            box-shadow: 0 0 0 3px rgba(156, 39, 176, 0.1);
        }

        .register-btn {
            width: 100%;
            padding: 18px;
            background: linear-gradient(45deg, #9c27b0, #e91e63);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 30px;
        }

        .register-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(156, 39, 176, 0.3);
        }

        .social-login {
            text-align: center;
        }

        .social-text {
            color: #666;
            margin-bottom: 20px;
            font-size: 14px;
        }

        .social-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
        }

        .social-btn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            transition: transform 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .social-btn:hover {
            transform: scale(1.1);
        }

        .google-btn {
            background: #db4437;
            color: white;
        }

        .facebook-btn {
            background: #4267B2;
            color: white;
        }

        @media (max-width: 768px) {
            body {
                flex-direction: column;
            }

            .left-section {
                height: 40vh;
                padding: 30px;
            }

            .quote-text {
                font-size: 28px;
            }

            .right-section {
                width: 100%;
                height: 60vh;
                padding: 40px 30px;
            }
        }
    </style>
</head>
<body>
    <div class="left-section">
        <a href="#" class="back-button" onclick="goBack()">
            <span class="back-arrow">←</span>
            Kembali
        </a>

        <div class="quote-section">
            <div class="quote-text">
                "Rasakan petualangan seru tak terlupakan bersama kami!"
            </div>
            <div class="quote-source">
                explorejemur.com
            </div>
        </div>
    </div>

    <div class="right-section">
        <div class="form-header">
            <div class="runner-icon"></div>
            <h2 class="form-title">Daftar</h2>
        </div>

        <form id="registrationForm">
            <div class="form-group">
                <input type="text" class="form-input" placeholder="Nama" id="nama" required>
            </div>

            <div class="form-group">
                <input type="email" class="form-input" placeholder="Email" id="email" required>
            </div>

            <div class="form-group">
                <input type="password" class="form-input" placeholder="Kata sandi" id="password" required>
            </div>

            <button type="submit" class="register-btn">DAFTAR</button>
        </form>

        <div class="social-login">
            <p class="social-text">ATAU DAFTAR DENGAN</p>
            <div class="social-buttons">
                <button class="social-btn google-btn" onclick="loginWithGoogle()">
                    G
                </button>
                <button class="social-btn facebook-btn" onclick="loginWithFacebook()">
                    f
                </button>
            </div>
        </div>
    </div>

    <script>
        // Form validation dan submission
        document.getElementById('registrationForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const nama = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (nama && email && password) {
                // Simulasi proses registrasi
                showMessage('Pendaftaran berhasil! Selamat datang, ' + nama + '!');

                // Reset form
                this.reset();
            } else {
                showMessage('Mohon lengkapi semua field!', 'error');
            }
        });

        // Fungsi untuk menampilkan pesan
        function showMessage(message, type = 'success') {
            const messageDiv = document.createElement('div');
            messageDiv.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 20px;
                background: ${type === 'success' ? '#4caf50' : '#f44336'};
                color: white;
                border-radius: 8px;
                z-index: 1000;
                animation: slideIn 0.3s ease;
            `;
            messageDiv.textContent = message;

            // CSS untuk animasi
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
            document.head.appendChild(style);

            document.body.appendChild(messageDiv);

            setTimeout(() => {
                messageDiv.remove();
            }, 3000);
        }

        // Fungsi tombol kembali
        function goBack() {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                showMessage('Tidak ada halaman sebelumnya');
            }
        }

        // Fungsi login sosial media
        function loginWithGoogle() {
            showMessage('Fitur login Google akan segera tersedia!');
        }

        function loginWithFacebook() {
            showMessage('Fitur login Facebook akan segera tersedia!');
        }

        // Input focus effects
        const inputs = document.querySelectorAll('.form-input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
            });

            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });

        // Animasi saat halaman dimuat
        window.addEventListener('load', function() {
            const rightSection = document.querySelector('.right-section');
            const leftSection = document.querySelector('.left-section');

            rightSection.style.transform = 'translateX(100%)';
            leftSection.style.opacity = '0';

            setTimeout(() => {
                rightSection.style.transition = 'transform 0.6s ease';
                rightSection.style.transform = 'translateX(0)';

                leftSection.style.transition = 'opacity 0.6s ease';
                leftSection.style.opacity = '1';
            }, 100);
        });
    </script>
</body>
</html>
