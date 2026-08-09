const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const topbar = document.querySelector(".topbar");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (topbar) {
  const updateTopbar = () => {
    topbar.classList.toggle("scrolled", window.scrollY > 10);
  };
  updateTopbar();
  window.addEventListener("scroll", updateTopbar, { passive: true });
}

const revealItems = document.querySelectorAll(".reveal");

// Fallback path: reveal anything in (or near) the viewport, so content is
// never left hidden if IntersectionObserver callbacks are unavailable.
const revealInView = () => {
  const vh = window.innerHeight || document.documentElement.clientHeight || Infinity;
  revealItems.forEach((item) => {
    if (item.classList.contains("is-visible")) return;
    const rect = item.getBoundingClientRect();
    if (rect.top < vh * 0.92 && rect.bottom > 0) {
      item.classList.add("is-visible");
    }
  });
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

window.addEventListener("scroll", revealInView, { passive: true });
window.addEventListener("resize", revealInView, { passive: true });
revealInView();

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
