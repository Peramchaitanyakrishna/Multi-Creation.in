      document.addEventListener('DOMContentLoaded', () => {
            const mainPage = document.getElementById('home-page');
            const loginPage = document.getElementById('login-page');
            const signupPage = document.getElementById('signup-page');
            const navLoginBtn = document.getElementById('nav-login-btn');
            const showSignupBtn = document.getElementById('show-signup-btn');
            const showLoginBtn = document.getElementById('show-login-btn');
            const loginSubmitBtn = document.getElementById('login-submit-btn');

            function showPage(pageToShow) {
                document.body.style.overflow = 'hidden';
                mainPage.style.display = 'none';
                loginPage.classList.add('hidden');
                signupPage.classList.add('hidden');
                
                if (pageToShow === mainPage) {
                    mainPage.style.display = 'block';
                    document.body.style.overflow = 'auto';
                } else {
                    pageToShow.classList.remove('hidden');
                }
                window.scrollTo(0, 0);
            }
            navLoginBtn.addEventListener('click', () => showPage(loginPage));
            showSignupBtn.addEventListener('click', () => showPage(signupPage));
            showLoginBtn.addEventListener('click', () => showPage(loginPage));
            loginSubmitBtn.addEventListener('click', () => showPage(mainPage));

            const header = document.getElementById('main-header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) header.classList.add('scrolled');
                else header.classList.remove('scrolled');
            });

            const typewriterElement = document.getElementById('typewriter');
            const textToType = typewriterElement.textContent;
            typewriterElement.textContent = '';
            let i = 0;
            function typeWriter() {
                if (i < textToType.length) {
                    typewriterElement.textContent += textToType.charAt(i++);
                    setTimeout(typeWriter, 100);
                }
            }
            typeWriter();

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add('visible');
                });
            }, { threshold: 0.15 });
            document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => observer.observe(el));
            
            document.querySelectorAll('.tilt-card').forEach(card => {
                const maxTilt = 15;
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left, y = e.clientY - rect.top;
                    const { width, height } = rect;
                    const rotateX = maxTilt * ((y / height) - 0.5);
                    const rotateY = -maxTilt * ((x / width) - 0.5);
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                });
            });
        });