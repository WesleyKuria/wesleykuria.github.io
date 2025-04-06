// Toggle mobile navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    document.body.classList.toggle('no-scroll'); // Prevent background scrolling
};

// Close navbar when clicking a link or outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && e.target !== menuIcon) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});

// Scroll sections
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    // Sticky header
    header.classList.toggle('sticky', window.scrollY > 100);

    // Section animation and active nav link
    let current = '';
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            current = id;
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // Update nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for nav links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                // Close mobile menu if open
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
                document.body.classList.remove('no-scroll');
                
                // Smooth scroll
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Footer animation
const footer = document.querySelector('footer');
window.addEventListener('scroll', () => {
    footer.classList.toggle('show-animate', 
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100
    );
});
