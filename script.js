header.classList.remove('transparent');


document.addEventListener('DOMContentLoaded', () => {
// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animación de habilidades al hacer scroll
const observerOptions = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.skill-card').forEach(skill => {
  skill.style.opacity = '0';
  skill.style.transform = 'translateY(20px)';
  skill.style.transition = 'all 0.5s ease-out';
  observer.observe(skill);
});

// Formulario de contacto
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  // Aquí iría la lógica para enviar el formulario
  alert('¡Mensaje enviado con éxito!');
  contactForm.reset();
});

// Animación de proyectos al hacer scroll
document.querySelectorAll('.project-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'all 0.5s ease-out';
  observer.observe(card);

    btn.addEventListener('click', (event) => {
      event.preventDefault();
      project.classList.toggle('active');

      if (project.classList.contains('active')) {
        btn.textContent = 'Ver Menos';
      } else {
        btn.textContent = 'Ver Detalles';
      }
    });

    details.addEventListener('click', (event) => {
      if (event.target === details) {
        project.classList.remove('active');
        btn.textContent = 'Ver Detalles';
      }
    });
  });
});


