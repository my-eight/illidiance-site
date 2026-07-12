const элементы = document.querySelectorAll(".проявление");

const наблюдатель = new IntersectionObserver(
  (записи) => {
    записи.forEach((запись) => {
      if (запись.isIntersecting) {
        запись.target.classList.add("видно");
        наблюдатель.unobserve(запись.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -40px",
  },
);

элементы.forEach((элемент, индекс) => {
  элемент.style.transitionDelay = `${Math.min(индекс * 45, 220)}ms`;
  наблюдатель.observe(элемент);
});
