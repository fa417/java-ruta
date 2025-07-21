document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const from = params.get('from');

    const backLink = document.getElementById('back-home');
    const isFromPortfolio = from === 'portfolio';
    const isSP = window.matchMedia('(max-width: 768px)').matches;

    if (isFromPortfolio && isSP) {
        backLink.style.display = 'block';
    }

    let countIndex = 0;
    let countNumber = 0;

});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./js/service-worker.js')
        .then(reg => {
            console.log('✅ Service Worker registered:', reg.scope);
        })
        .catch(err => {
            console.log('❌ Service Worker registration failed:', err);
        });
}