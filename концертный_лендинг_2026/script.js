const элементы = document.querySelectorAll(".проявление");
const тело = document.body;

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

const запускИнтерфейса = () => {
  элементы.forEach((элемент, индекс) => {
    элемент.style.transitionDelay = `${Math.min(индекс * 42, 210)}ms`;
    наблюдатель.observe(элемент);
  });
};

window.setTimeout(() => {
  тело.classList.remove("загрузка");
}, 2800);

window.setTimeout(запускИнтерфейса, 1450);
