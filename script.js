// Smooth scroll when arrow is clicked
const heroArrow = document.querySelector('.hero-arrow');
if (heroArrow) {
  heroArrow.addEventListener('click', () => {
    document.getElementById('names')?.scrollIntoView({ behavior: 'smooth' });
  });
}

// No flip interaction anymore (date/time shows directly).
// Directions toggle between routes
const directionButtons = document.querySelectorAll('.direction-button');
const directionCards = document.querySelectorAll('.direction-card');

directionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const route = button.dataset.route;

    directionButtons.forEach(b => b.classList.toggle('active', b === button));
    directionCards.forEach(card => {
      card.classList.toggle('active', card.dataset.route === route);
    });
  });
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.hero-title, .hero-verse, .name, .card, .direction-card');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.25 });

revealElements.forEach(el => revealObserver.observe(el));



function popConfetti(target, count = 75) {
  if (!target) return;
  const colors = ['#ff5b83', '#7fd8e9', '#ffd36d', '#b88fff', '#4dc981', '#ff8a65', '#ba68c8', '#81c784'];
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    const size = Math.random() * 12 + 8;
    piece.style.width = `${size}px`;
    piece.style.height = `${size * 0.7}px`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.left = `${Math.random() * 90 + 5}%`;
    piece.style.top = `${Math.random() * 30 + 5}%`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    piece.style.animationDuration = `${2 + Math.random() * 1.5}s`;

    target.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 4000);
  }
}

const namesSection = document.getElementById('names');
if (namesSection) {
  const confettiObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        popConfetti(namesSection, 40);
        confettiObserver.unobserve(namesSection);
      }
    });
  }, { threshold: 0.35 });
  confettiObserver.observe(namesSection);
}


