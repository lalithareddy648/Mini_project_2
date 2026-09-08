// Mobile Menu Toggle Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    
    // Change icon between hamburger and close (X)
    if (mobileMenu.classList.contains('hidden')) {
        menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    } else {
        menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
    }
});

// Close mobile menu when a link is clicked
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg', 'bg-slate-950/90');
        navbar.classList.remove('bg-slate-950/70');
    } else {
        navbar.classList.remove('shadow-lg', 'bg-slate-950/90');
        navbar.classList.add('bg-slate-950/70');
    }
});
