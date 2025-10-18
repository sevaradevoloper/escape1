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