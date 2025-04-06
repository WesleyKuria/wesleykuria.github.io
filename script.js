// toggle icon navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections 
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    // sticky header
    header.classList.toggle('sticky', window.scrollY > 100);

    // section animation and active nav link
    let current = '';
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;  // Increased offset for better detection
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            current = id;
            sec.classList.add('show-animate');
        }
        
        else {
             sec.classList.remove('show-animate');
         }
    });

    // Update all nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Close navbar when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
        
        // Smooth scroll to section
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
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
