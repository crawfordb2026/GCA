document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const hero = document.querySelector('.hero');
    const starsContainer = document.getElementById('stars');
    const sections = [
        document.querySelector('.about'),
        document.querySelector('.projects'),
        document.querySelector('.contact')
    ];

    // Create stars with random movements
    function createStars() {
        const starsCount = 150; // Increased number of stars

        for (let i = 0; i < starsCount; i++) {
            const star = document.createElement('div');
            star.className = `star ${Math.random() > 0.5 ? 'blue' : 'green'}`;
            
            // Random size between 1 and 3 pixels
            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            
            // Random position
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            // Random movement
            const duration = Math.random() * 20 + 10; // Between 10 and 30 seconds
            const delay = Math.random() * -duration; // Random start time
            
            // Random movement path
            const x1 = Math.random() * 200 - 100;
            const y1 = Math.random() * 200 - 100;
            const x2 = Math.random() * 200 - 100;
            const y2 = Math.random() * 200 - 100;
            
            star.style.animation = `moveStar ${duration}s linear ${delay}s infinite`;
            star.style.setProperty('--x1', `${x1}px`);
            star.style.setProperty('--y1', `${y1}px`);
            star.style.setProperty('--x2', `${x2}px`);
            star.style.setProperty('--y2', `${y2}px`);
            
            starsContainer.appendChild(star);
        }
    }

    createStars();

    // Section fade-in/slide-up animation on scroll
    function revealSections() {
        const triggerBottom = window.innerHeight * 0.85;
        sections.forEach(section => {
            if (!section) return;
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', revealSections);
    revealSections();

    // Contact form
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Here you would typically send the form data to your backend
        // For now, we'll just log it to the console
        console.log('Form submitted:', formData);

        // Clear the form
        contactForm.reset();

        // Show a success message
        alert('Thank you for your message! I will get back to you soon.');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
