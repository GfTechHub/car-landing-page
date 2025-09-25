// Counter animation
const counters = document.querySelectorAll('.counter');
const speed = 200; // smaller = faster

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;
      
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    
    updateCount();
  });
};

// Trigger when stats section is visible
const statsSection = document.querySelector('.stats');
let started = false;

window.addEventListener('scroll', () => {
  const statsTop = statsSection.offsetTop - window.innerHeight + 200;
  if (!started && window.scrollY > statsTop) {
    animateCounters();
    started = true;
  }
});