document.addEventListener('DOMContentLoaded', () => {
    // --- Scroll Animations ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    // Elements to animate
    const animateElements = document.querySelectorAll('.hero__content, .feature-card, .product-card, .snap-card, .magazine-card, .care-item');
    animateElements.forEach(el => {
        el.classList.add('animate-up');
        observer.observe(el);
    });

    // --- Header Scroll Style ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });

    // --- Cart Sidebar Interaction ---
    const cartToggle = document.querySelector('.header__user-nav a:last-child'); // CART(0)
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartClose = document.getElementById('cart-close');
    const body = document.body;

    if (cartToggle && cartSidebar && cartClose) {
        cartToggle.addEventListener('click', (e) => {
            e.preventDefault();
            cartSidebar.classList.add('is-open');
            body.style.overflow = 'hidden'; // Prevent scroll
        });

        cartClose.addEventListener('click', () => {
            cartSidebar.classList.remove('is-open');
            body.style.overflow = '';
        });

        // Close on overlay click
        cartSidebar.addEventListener('click', (e) => {
            if (e.target === cartSidebar) {
                cartSidebar.classList.remove('is-open');
                body.style.overflow = '';
            }
        });
    }

    // --- Search Modal Interaction ---
    const searchBtn = document.querySelector('.header__search-btn');
    const searchInput = document.querySelector('.header__search-input');
    const searchModal = document.getElementById('search-modal');
    const searchClose = document.getElementById('search-modal-close');

    // For this design, we'll trigger a full modal when clicking the search button or just focus on the input if it's already there.
    // Let's make the search button open a dedicated modal for a premium feel.
    if (searchBtn && searchModal && searchClose) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            searchModal.classList.add('is-open');
            searchModal.querySelector('.search-modal__input').focus();
            body.style.overflow = 'hidden';
        });

        searchClose.addEventListener('click', () => {
            searchModal.classList.remove('is-open');
            body.style.overflow = '';
        });
    }
});
