// Simple interactions
document.addEventListener('DOMContentLoaded', () => {
    console.log("Ai-Grim Landing Page Loaded");

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for Fade-in animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation class to sections we want to animate
    // For now we just ensure existing fade-ins run, but we could add more dynamically
    
    // Future: Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            alert('모바일 메뉴 준비 중입니다!');
        });
    }

    // CTA Form Submission Mock
    const ctaForm = document.querySelector('.cta-form');
    if (ctaForm) {
        ctaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = ctaForm.querySelector('input').value;
            if(email) {
                alert(`${email}님, 사전 예약이 완료되었습니다!\n감사합니다.`);
                ctaForm.reset();
            }
        });
    }
});
