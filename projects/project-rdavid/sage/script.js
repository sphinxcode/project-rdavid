// ===== SET DARK MODE =====
document.documentElement.setAttribute('data-theme', 'dark');

// ===== VANTA.JS WAVE ANIMATION =====
let vantaEffect;

function initVantaWaves() {
    if (vantaEffect) {
        vantaEffect.destroy();
    }

    vantaEffect = VANTA.WAVES({
        el: "#heroSection",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x1a1a1a,
        shininess: 30.00,
        waveHeight: 15.00,
        waveSpeed: 0.4,
        zoom: 0.65
    });
}

// Initialize Vanta after page load
window.addEventListener('load', initVantaWaves);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== CONSOLE EASTER EGG =====
console.log('%c\ud83d\udc4b Hey there, curious developer!', 'font-size: 20px; font-weight: bold; color: #A47864;');
console.log('%cLooks like you found the console. Nice!', 'font-size: 14px; color: #666;');
console.log('%cWant to work with Ramon? Check out his services!', 'font-size: 14px; color: #FF6B6B;');

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// ===== PERFORMANCE MONITORING =====
if ('PerformanceObserver' in window) {
    const perfObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.duration > 100) {
                console.warn('Slow operation detected:', entry.name, entry.duration + 'ms');
            }
        }
    });

    perfObserver.observe({ entryTypes: ['measure', 'navigation'] });
}
