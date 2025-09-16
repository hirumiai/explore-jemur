<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Masuk - Login</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            height: 100vh;
            display: flex;
            overflow: hidden;
        }

        .left-section {
            flex: 1;
            background:
                linear-gradient(
                    135deg,
                    rgba(255, 193, 7, 0.6) 0%,
                    rgba(255, 152, 0, 0.7) 25%,
                    rgba(156, 39, 176, 0.8) 50%,
                    rgba(63, 81, 181, 0.7) 75%,
                    rgba(33, 150, 243, 0.6) 100%
                ),
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><defs><linearGradient id="water" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23006994;stop-opacity:1" /><stop offset="50%" style="stop-color:%23228B8D;stop-opacity:1" /><stop offset="100%" style="stop-color:%234682B4;stop-opacity:1" /></linearGradient></defs><rect fill="url(%23water)" width="1000" height="600"/><ellipse fill="%23B8860B" cx="900" cy="100" rx="150" ry="80" opacity="0.3"/><ellipse fill="%23DAA520" cx="850" cy="80" rx="100" ry="50" opacity="0.4"/><path fill="%232F4F4F" d="M750 300c50-30 100-20 150 0s100 30 150 0v300H750z"/><circle fill="%23006400" cx="850" cy="280" r="15"/><circle fill="%23228B22" cx="870" cy="285" r="20"/><circle fill="%2332CD32" cx="890" cy="275" r="12"/><rect fill="%238B4513" x="840" y="295" width="8" height="25"/><rect fill="%23A0522D" x="855" y="290" width="6" height="30"/></svg>');
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
            top: 40px;
            left: 40px;
            display: flex;
            align-items: center;
            color: white;
            text-decoration: none;
            font-size: 20px;
            font-weight: 400;
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 8px 15px;
            border-radius: 25px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
        }

        .back-button:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateX(-5px);
        }

        .back-arrow {
            margin-right: 12px;
            font-size: 24px;
            font-weight: 300;
        }

        .quote-section {
            color: white;
            max-width: 520px;
        }

        .quote-text {
            font-size: 52px;
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: 30px;
            text-shadow: 0 4px 15px rgba(0,0,0,0.3);
            letter-spacing: -0.5px;
        }

        .quote-source {
            font-size: 18px;
            opacity: 0.9;
            font-weight: 300;
            letter-spacing: 0.5px;
        }

        .right-section {
            width: 480px;
            background: white;
            padding: 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-shadow: -5px 0 25px rgba(0,0,0,0.1);
            position: relative;
        }

        .form-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .runner-illustration {
            width: 120px;
            height: 120px;
            margin: 0 auto 25px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .runner-figure {
            width: 80px;
            height: 80px;
            background: #4285f4;
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
            position: relative;
            animation: bounce 2s infinite ease-in-out;
        }

        .runner-figure::before {
            content: '';
            position: absolute;
            width: 25px;
            height: 25px;
            background: #8B4513;
            border-radius: 50%;
            top: -5px;
            left: 15px;
        }

        .runner-figure::after {
            content: '';
            position: absolute;
            width: 35px;
            height: 15px;
            background: #333;
            border-radius: 50%;
            bottom: -8px;
            left: 10px;
        }

        .geometric-shapes {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
        }

        .shape {
            position: absolute;
            animation: float 3s ease-in-out infinite;
        }

        .triangle {
            width: 0;
            height: 0;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-bottom: 14px solid #e91e63;
            top: 20px;
            right: 30px;
            animation-delay: -0.5s;
        }

        .circle-small {
            width: 12px;
            height: 12px;
            background: #00bcd4;
            border-radius: 50%;
            top: 40px;
            left: 20px;
            animation-delay: -1s;
        }

        .diamond {
            width: 10px;
            height: 10px;
            background: #4caf50;
            transform: rotate(45deg);
            bottom: 60px;
            right: 40px;
            animation-delay: -1.5s;
        }

        .circle-ring {
            width: 20px;
            height: 20px;
            border: 3px solid #9c27b0;
            border-radius: 50%;
            bottom: 30px;
            left: 40px;
            animation-delay: -2s;
        }

        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-10px);
            }
            60% {
                transform: translateY(-5px);
            }
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0px) rotate(0deg);
            }
            50% {
                transform: translateY(-10px) rotate(5deg);
            }
        }

        .form-title {
            font-size: 36px;
            font-weight: 700;
            color: #333;
            margin-bottom: 40px;
            letter-spacing: -0.5px;
        }

        .form-group {
            margin-bottom: 25px;
            position: relative;
        }

        .form-input {
            width: 100%;
            padding: 18px 24px;
            border: 2px solid #f0f0f0;
            border-radius: 14px;
            font-size: 16px;
            transition: all 0.3s ease;
            background: #fafafa;
            color: #333;
        }

        .form-input::placeholder {
            color: #999;
            font-weight: 400;
        }

        .form-input:focus {
            outline: none;
            border-color: #9c27b0;
            background: white;
            box-shadow: 0 0 0 4px rgba(156, 39, 176, 0.1);
            transform: translateY(-1px);
        }

        .login-btn {
            width: 100%;
            padding: 20px;
            background: linear-gradient(135deg, #9c27b0 0%, #e91e63 100%);
            color: white;
            border: none;
            border-radius: 14px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 20px;
            box-shadow: 0 4px 15px rgba(156, 39, 176, 0.3);
        }

        .login-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(156, 39, 176, 0.4);
        }

        .login-btn:active {
            transform: translateY(0);
        }

        .forgot-password {
            text-align: center;
            margin-bottom: 30px;
        }

        .forgot-text {
            color: #666;
            font-size: 14px;
        }

        .forgot-link {
            color: #4285f4;
            text-decoration: none;
            font-weight: 500;
            margin-left: 5px;
            transition: color 0.3s ease;
        }

        .forgot-link:hover {
            color: #9c27b0;
        }

        .social-login {
            text-align: center;
        }

        .social-text {
            color: #666;
            margin-bottom: 25px;
            font-size: 14px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .social-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
        }

        .social-btn {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            position: relative;
            overflow: hidden;
        }

        .social-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s;
        }

        .social-btn:hover::before {
            left: 100%;
        }

        .social-btn:hover {
            transform: translateY(-3px) scale(1.05);
        }

        .google-btn {
            background: linear-gradient(135deg, #db4437, #ff6b47);
            color: white;
            font-weight: bold;
            font-size: 24px;
        }

        .facebook-btn {
            background: linear-gradient(135deg, #4267B2, #5b7bd5);
            color: white;
            font-weight: bold;
            font-size: 24px;
        }

        @media (max-width: 768px) {
            body {
                flex-direction: column;
            }

            .left-section {
                height: 35vh;
                padding: 30px;
            }

            .quote-text {
                font-size: 32px;
            }

            .right-section {
                width: 100%;
                height: 65vh;
                padding: 40px 30px;
                overflow-y: auto;
            }

            .form-title {
                font-size: 28px;
            }

            .runner-illustration {
                width: 100px;
                height: 100px;
            }
        }

        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(156, 39, 176, 0.9);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            backdrop-filter: blur(5px);
        }

        .loading-spinner {
            width: 50px;
            height: 50px;
            border: 4px solid rgba(255,255,255,0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="loading-overlay" id="loadingOverlay">
        <div class="loading-spinner"></div>
    </div>

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
            <div class="runner-illustration">
                <div class="geometric-shapes">
                    <div class="shape triangle"></div>
                    <div class="shape circle-small"></div>
                    <div class="shape diamond"></div>
                    <div class="shape circle-ring"></div>
                </div>
                <div class="runner-figure"></div>
            </div>
            <h2 class="form-title">Masuk</h2>
        </div>

        <form id="loginForm">
            <div class="form-group">
                <input type="email" class="form-input" placeholder="Email" id="email" required>
            </div>

            <div class="form-group">
                <input type="password" class="form-input" placeholder="Kata sandi" id="password" required>
            </div>

            <button type="submit" class="login-btn">MASUK</button>
        </form>

        <div class="forgot-password">
            <span class="forgot-text">Lupa kata sandi?</span>
            <span class="forgot-text">Belum punya akun?</span>
            <a href="#" class="forgot-link" onclick="showRegister()">Daftar disini</a>
        </div>

        <div class="social-login">
            <p class="social-text">atau masuk dengan</p>
            <div class="social-buttons">
                <button class="social-btn google-btn" onclick="loginWithGoogle()" title="Masuk dengan Google">
                    G
                </button>
                <button class="social-btn facebook-btn" onclick="loginWithFacebook()" title="Masuk dengan Facebook">
                    f
                </button>
            </div>
        </div>
    </div>

    <script>
        // Form validation dan login simulation
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email && password) {
                showLoading();

                // Simulasi proses login
                setTimeout(() => {
                    hideLoading();
                    showMessage('Login berhasil! Selamat datang kembali!', 'success');

                    // Reset form setelah berhasil login
                    setTimeout(() => {
                        this.reset();
                    }, 1500);

                }, 2000);
            } else {
                showMessage('Mohon lengkapi email dan kata sandi!', 'error');
            }
        });

        // Loading functions
        function showLoading() {
            document.getElementById('loadingOverlay').style.display = 'flex';
        }

        function hideLoading() {
            document.getElementById('loadingOverlay').style.display = 'none';
        }

        // Message notification
        function showMessage(message, type = 'success') {
            const messageDiv = document.createElement('div');
            messageDiv.style.cssText = `
                position: fixed;
                top: 30px;
                right: 30px;
                padding: 20px 25px;
                background: ${type === 'success' ?
                    'linear-gradient(135deg, #4caf50, #45a049)' :
                    'linear-gradient(135deg, #f44336, #e53935)'};
                color: white;
                border-radius: 12px;
                z-index: 1001;
                font-weight: 500;
                box-shadow: 0 8px 25px rgba(0,0,0,0.2);
                animation: slideInRight 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                max-width: 350px;
            `;
            messageDiv.textContent = message;

            // CSS untuk animasi
            if (!document.getElementById('messageStyles')) {
                const style = document.createElement('style');
                style.id = 'messageStyles';
                style.textContent = `
                    @keyframes slideInRight {
                        from {
                            transform: translateX(100%) scale(0.8);
                            opacity: 0;
                        }
                        to {
                            transform: translateX(0) scale(1);
                            opacity: 1;
                        }
                    }
                    @keyframes slideOutRight {
                        from {
                            transform: translateX(0) scale(1);
                            opacity: 1;
                        }
                        to {
                            transform: translateX(100%) scale(0.8);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
            }

            document.body.appendChild(messageDiv);

            setTimeout(() => {
                messageDiv.style.animation = 'slideOutRight 0.3s ease-in forwards';
                setTimeout(() => messageDiv.remove(), 300);
            }, 3500);
        }

        // Navigation functions
        function goBack() {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                showMessage('Tidak ada halaman sebelumnya');
            }
        }

        function showRegister() {
            showMessage('Mengarahkan ke halaman registrasi...');
            setTimeout(() => {
                // Simulasi redirect ke halaman registrasi
                showMessage('Fitur registrasi akan segera tersedia!');
            }, 1000);
        }

        // Social media login functions
        function loginWithGoogle() {
            showLoading();
            setTimeout(() => {
                hideLoading();
                showMessage('Login dengan Google berhasil!', 'success');
            }, 1500);
        }

        function loginWithFacebook() {
            showLoading();
            setTimeout(() => {
                hideLoading();
                showMessage('Login dengan Facebook berhasil!', 'success');
            }, 1500);
        }

        // Input animations dan effects
        const inputs = document.querySelectorAll('.form-input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transition = 'transform 0.2s ease';
                this.parentElement.style.transform = 'translateY(-2px)';
            });

            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'translateY(0)';
            });

            // Real-time validation
            input.addEventListener('input', function() {
                if (this.type === 'email' && this.value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (emailRegex.test(this.value)) {
                        this.style.borderColor = '#4caf50';
                    } else {
                        this.style.borderColor = '#ff9800';
                    }
                }
            });
        });

        // Page load animation
        window.addEventListener('load', function() {
            const rightSection = document.querySelector('.right-section');
            const leftSection = document.querySelector('.left-section');

            // Initial states
            rightSection.style.transform = 'translateX(100%)';
            rightSection.style.opacity = '0';
            leftSection.style.transform = 'translateX(-50px)';
            leftSection.style.opacity = '0';

            // Animate in
            setTimeout(() => {
                rightSection.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                rightSection.style.transform = 'translateX(0)';
                rightSection.style.opacity = '1';

                leftSection.style.transition = 'all 0.8s ease 0.2s';
                leftSection.style.transform = 'translateX(0)';
                leftSection.style.opacity = '1';
            }, 100);
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                hideLoading();
            }
            if (e.ctrlKey && e.key === 'Enter') {
                document.getElementById('loginForm').dispatchEvent(new Event('submit'));
            }
        });

        // Easter egg - konami code
        let konamiCode = [];
        const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

        document.addEventListener('keydown', function(e) {
            konamiCode.push(e.keyCode);
            if (konamiCode.length > 10) {
                konamiCode.shift();
            }
            if (konamiCode.toString() === konami.toString()) {
                showMessage('🎉 Konami Code activated! Welcome, master!', 'success');
                document.body.style.filter = 'hue-rotate(180deg)';
                setTimeout(() => {
                    document.body.style.filter = 'none';
                }, 3000);
            }
        });
    </script>
</body>
</html>
