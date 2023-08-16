const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  const btn = project.querySelector('.btn');
  const details = project.querySelector('.details');
  const closeButton = details.querySelector('.close-button'); // botón de cierre dentro de la sección de detalles

  btn.addEventListener('click', (event) => {
    event.preventDefault();
    project.classList.toggle('active');
  });

  closeButton.addEventListener('click', () => {
    project.classList.remove('active');
  });

  details.addEventListener('click', (event) => {
    if (event.target === details) {
      project.classList.remove('active');
    }
  });
});
