import { animate, stagger, spring } from 'animejs';

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Grid Background Animation (Anime.js v4)
    const gridContainer = document.getElementById('hero-grid');
    if (gridContainer) {
        // Create grid blocks dynamically
        for (let i = 0; i < 200; i++) {
            const block = document.createElement('div');
            block.className = 'grid-block';
            gridContainer.appendChild(block);
        }

        const animateGrid = () => {
            animate('.grid-block', {
                scale: [0.1, 1],
                opacity: [0.2, 0.05],
                duration: 1200,
                delay: stagger(200, { grid: [20, 10], from: 'center' }),
                ease: 'outSine',
                onComplete: () => {
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

    // 3. Scroll Reveal Animations with Spring Physics
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const isProject = entry.target.classList.contains('project-card');
                animate(entry.target, {
                    translateY: [100, 0],
                    opacity: [0, 1],
                    ease: spring({ bounce: 0.81, duration: 628 }), // v4 spring
                    delay: isProject ? stagger(200)(entry.target) : 0
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

    // 4. Dynamic Parallax Shapes (Google Lens Style)
    const shapes = document.querySelectorAll('.hero-shape');
    
    // Function to generate random positions
    const randomValue = (min, max) => Math.random() * (max - min) + min;

    const animateShape = (shape, i) => {
        // Random viewport positions (relative to their initial center)
        const rangeX = window.innerWidth * 0.4;
        const rangeY = window.innerHeight * 0.4;
        
        animate(shape, {
            translateX: randomValue(-rangeX, rangeX),
            translateY: randomValue(-rangeY, rangeY),
            scale: randomValue(0.8, 1.5),
            rotate: randomValue(0, 360),
            duration: randomValue(4000, 8000), // Very slow, fluid movement
            ease: 'inOutSine',
            onComplete: () => animateShape(shape, i) // Loop infinitely
        });
    };

    shapes.forEach((shape, i) => {
        animateShape(shape, i);
    });
        
    // Smooth Navigation Active State
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
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