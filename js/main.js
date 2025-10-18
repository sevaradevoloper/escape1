// 🔹 Sidebar ishlashi
const menuIcon = document.querySelector(".menu__icon");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close");

menuIcon.addEventListener("click", () => sidebar.classList.add("active"));
closeBtn.addEventListener("click", () => sidebar.classList.remove("active"));
menuIcon.addEventListener("click", () => menuIcon.classList.toggle("active"));
closeBtn.addEventListener("click", () => menuIcon.classList.remove("active"));


// 🔹 Hero SLIDER (Avtomatik almashtirish bilan)
const heroSwiper = new Swiper('.hero', {
    loop: true,
    autoplay: {
        delay: 5000, // 5 soniyada bir rasm almashtirish
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.hero__next',
        prevEl: '.hero__prev',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
});

// 🔹 Featured Posts (Overlay Visibility Toggler)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        // Kartadagi overlay'ni topadi
        const overlay = card.querySelector('.overlay');
        
        // 'visible' class'ini qo'shadi/olib tashlaydi
        overlay.classList.toggle('visible'); 
    });
});


// 🔹 Most Recent SLIDERS (Har bir karta uchun alohida Swiper)
// Barcha alohida Swiper konteynerlarini tanlaymiz
const recentSliders = document.querySelectorAll('.recent .card__image.swiper');

recentSliders.forEach(function(swiperElement) {
    new Swiper(swiperElement, {
        // Asosiy sozlamalar
        loop: true, 
        slidesPerView: 1, 
        
        // Navigatsiya tugmalari (har bir Swiper o'z tugmalarini ishlatadi)
        navigation: {
            nextEl: swiperElement.querySelector('.swiper-button-next'),
            prevEl: swiperElement.querySelector('.swiper-button-prev'),
        },
    });
});








document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('.email-input');
    const footerBg = document.querySelector('.footer-bg');

    // Inputga fokus bo'lganda fonni blur qilish
    if (emailInput && footerBg) {
        emailInput.addEventListener('focus', () => {
            footerBg.classList.add('blurred');
        });

        emailInput.addEventListener('blur', () => {
            footerBg.classList.remove('blurred');
        });
    }

    // Input to'liq bo'lmaganda labelni saqlash (CSS da ham bor, lekin JS yordamida ishonchliroq)
    const handleInput = () => {
        const label = emailInput.nextElementSibling; // label - inputdan keyingi element
        if (emailInput.value.length > 0) {
            emailInput.classList.add('has-content');
        } else {
            emailInput.classList.remove('has-content');
        }
    };
    
    // Yana bir tekshirish uchun: agar sayt yuklanganda input to'liq bo'lsa
    if(emailInput) {
        handleInput(); 
        emailInput.addEventListener('input', handleInput);
    }
});





document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('.email-input');
    const footerBg = document.querySelector('.footer-bg');

    if (emailInput && footerBg) {
        // Fokus bo'lganda BLUR classini qo'shish
        emailInput.addEventListener('focus', () => {
            footerBg.classList.add('blurred');
        });

        // Fokusdan chiqqanda BLUR classini olib tashlash
        emailInput.addEventListener('blur', () => {
            footerBg.classList.remove('blurred');
        });
    }
});