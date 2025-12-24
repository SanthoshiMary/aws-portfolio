// Dark Mode Toggle (press D key)
document.addEventListener("keydown", (e) => {
  if (e.key === "d") {
    document.body.classList.toggle("dark");
  }
});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});
