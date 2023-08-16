window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('transparent');
  } else {
    header.classList.remove('transparent');
  }
});

const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  const btn = project.querySelector('.btn');
  const details = project.querySelector('.details');


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




