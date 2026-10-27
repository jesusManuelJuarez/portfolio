import { animate } from 'animejs';

// 1. Toast Notification System (Canonical Vortex V2)
let toastTimeout = null;
export function showNotification(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2400);
}

// 2. Copy Email Helper (OpSec Safe Direct Contact)
export function copyEmailToClipboard() {
  const email = 'manueljuarez.dev@gmail.com';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(() => {
      showNotification('Correo copiado: manueljuarez.dev@gmail.com');
    }).catch(() => {
      showNotification(email);
    });
  } else {
    showNotification(email);
  }
}

// 3. Bento Pill Switcher — Filter Projects
export function filterProjects(category, btnElement) {
  if (btnElement && btnElement.parentElement) {
    btnElement.parentElement.querySelectorAll('.switcher-item').forEach((btn) => {
      btn.classList.remove('active');
    });
    btnElement.classList.add('active');
  }

  const cards = document.querySelectorAll('.project-item');
  cards.forEach((card) => {
    const itemCategory = card.getAttribute('data-category');
    if (category === 'all' || itemCategory === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });

  const labels = {
    all: 'Mostrando todos los proyectos (9)',
    own: 'Mostrando proyectos propios y Open Source (6)',
    enterprise: 'Mostrando arquitecturas IA bajo NDA (3)'
  };
  if (labels[category]) {
    showNotification(labels[category]);
  }
}

// Expose interactive handlers for inline onclick attributes
export function highlightAboutCard(facet, btnElement) {
  if (btnElement && btnElement.parentElement) {
    btnElement.parentElement.querySelectorAll('.switcher-item').forEach((btn) => {
      btn.classList.remove('active');
    });
    btnElement.classList.add('active');
  }

  const cards = document.querySelectorAll('.about-facet-card');
  cards.forEach((card) => {
    const cardFacet = card.getAttribute('data-facet');
    if (facet === 'all') {
      card.style.opacity = '1';
      card.style.borderColor = 'rgba(255, 255, 255, 0.12)';
      card.style.transform = 'none';
    } else if (cardFacet === facet) {
      card.style.opacity = '1';
      card.style.borderColor = 'rgba(255, 255, 255, 0.32)';
      card.style.transform = 'translateY(-2px)';
    } else {
      card.style.opacity = '0.45';
      card.style.borderColor = 'rgba(255, 255, 255, 0.06)';
      card.style.transform = 'none';
    }
  });

  const facetLabels = {
    all: 'Mostrando presentación completa',
    story: 'Destacando: Trayectoria & Presentación de Producto',
    philosophy: 'Destacando: Filosofía de Ingeniería Zero Vibe Coding'
  };
  if (facetLabels[facet]) {
    showNotification(facetLabels[facet]);
  }
}

window.showNotification = showNotification;
window.copyEmailToClipboard = copyEmailToClipboard;
window.filterProjects = filterProjects;
window.highlightAboutCard = highlightAboutCard;

document.addEventListener('DOMContentLoaded', () => {
  // 4. Google Lens Ambient Background Orbs (Anime.js v4)
  const shapes = document.querySelectorAll('.hero-shape');
  const randomValue = (min, max) => Math.random() * (max - min) + min;

  const animateShape = (shape) => {
    const rangeX = window.innerWidth * 0.38;
    const rangeY = window.innerHeight * 0.38;

    animate(shape, {
      translateX: randomValue(-rangeX, rangeX),
      translateY: randomValue(-rangeY, rangeY),
      scale: randomValue(0.85, 1.45),
      rotate: randomValue(0, 360),
      duration: randomValue(5000, 9000),
      ease: 'inOutSine',
      onComplete: () => animateShape(shape)
    });
  };

  shapes.forEach((shape) => {
    animateShape(shape);
  });

  // 5. Top Dock Bar Active Pill on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navButtons = document.querySelectorAll('.nav-pills .nav-pill-btn');

  const updateActiveNavOnScroll = () => {
    const scrollPosition = window.scrollY + 220;
    let activeId = 'home';

    sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop) {
        activeId = section.getAttribute('id');
      }
    });

    navButtons.forEach((btn) => {
      const target = btn.getAttribute('data-section');
      if (target === activeId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', updateActiveNavOnScroll, { passive: true });
  updateActiveNavOnScroll();
});
