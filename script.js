const sections = [...document.querySelectorAll(".menu-section")];
const links = [...document.querySelectorAll(".category-nav a")];

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-35% 0px -60% 0px", threshold: 0 });

sections.forEach(section => observer.observe(section));
