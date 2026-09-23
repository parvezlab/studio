// ১. ভাষা পরিবর্তন (বাংলা/ইংরেজি)
const langToggleBtn = document.getElementById('lang-toggle');
const langLabel = document.getElementById('lang-label');

langToggleBtn.addEventListener('click', () => {
    const bnElements = document.querySelectorAll('.lang-bn');
    const enElements = document.querySelectorAll('.lang-en');

    bnElements.forEach(el => el.classList.toggle('hidden'));
    enElements.forEach(el => el.classList.toggle('hidden'));

    if (langLabel.innerText === 'EN') {
        langLabel.innerText = 'BN';
    } else {
        langLabel.innerText = 'EN';
    }
});

// ২. থিম অপশন চয়ন
const themeSelect = document.getElementById('theme-select');

themeSelect.addEventListener('change', (e) => {
    const selectedTheme = e.target.value;
    document.documentElement.setAttribute('data-theme', selectedTheme);
});

// ৩. অটোমেটিক ব্যানার স্লাইডার
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// ম্যানুয়াল ক্লিক
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// প্রতি ৪ সেকেন্ড পর পর ব্যানার চেঞ্জ হবে
setInterval(nextSlide, 4000);
