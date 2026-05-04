document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Grid Background Animation (Anime.js)
    const gridContainer = document.getElementById('hero-grid');
    if (gridContainer) {
        // Create 200 grid blocks dynamically
        for (let i = 0; i < 200; i++) {
            const block = document.createElement('div');
            block.className = 'grid-block';
            gridContainer.appendChild(block);
        }

        const animateGrid = () => {
            anime({
                targets: '.grid-block',
                scale: [
                    { value: 0.1, easing: 'easeOutSine', duration: 500 },
                    { value: 1, easing: 'easeInOutQuad', duration: 1200 }
                ],
                opacity: [
                    { value: 0.2, easing: 'easeOutSine', duration: 500 },
                    { value: 0.05, easing: 'easeInOutQuad', duration: 1200 }
                ],
                delay: anime.stagger(200, { grid: [20, 10], from: 'center' }),
                complete: () => {
                    setTimeout(animateGrid, 2000); // Loop animation
                }
            });
        };
        
        animateGrid();
    }

    // 2. Typing Effect
    const typingTextElement = document.getElementById('typing-text');
    if (typingTextElement) {
        const textToType = "Ingeniero en Software";
        typingTextElement.innerHTML = '';
        let i = 0;
        
        function typeWriter() {
            if (i < textToType.length) {
                typingTextElement.innerHTML += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1000); // start after 1s delay
    }

    // 3. Scroll Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    translateY: [30, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    duration: 1000,
                    delay: entry.target.classList.contains('project-card') ? anime.stagger(150)(entry.target) : 0
                });
                observer.unobserve(entry.target);
                entry.target.classList.remove('reveal');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 4. Smooth Navigation & Active State
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});