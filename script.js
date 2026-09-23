// ১. ভাষা নির্বাচন
const langToggleBtn = document.getElementById('lang-toggle');
const langLabel = document.getElementById('lang-label');

langToggleBtn.addEventListener('click', () => {
    const bnElements = document.querySelectorAll('.lang-bn');
    const enElements = document.querySelectorAll('.lang-en');

    bnElements.forEach(el => el.classList.toggle('hidden'));
    enElements.forEach(el => el.classList.toggle('hidden'));

    langLabel.innerText = (langLabel.innerText === 'EN') ? 'BN' : 'EN';
});

// ২. থিম সিলেক্টর
const themeSelect = document.getElementById('theme-select');
themeSelect.addEventListener('change', (e) => {
    document.documentElement.setAttribute('data-theme', e.target.value);
});

// ৩. স্লাইডার
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

document.querySelector('.next-slide').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.querySelector('.prev-slide').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 4000);

// ৪. ক্যাটাগরি ফিল্টার (অডিও গল্প, কবিতা, গল্প, গান)
function filterCategory(category) {
    const cards = document.querySelectorAll('.creation-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
