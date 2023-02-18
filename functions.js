
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      duration: 2000 // set duration to 2 seconds
    });
  });
});
