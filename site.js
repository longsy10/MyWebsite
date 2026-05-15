const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const dropdowns = document.querySelectorAll(".dropdown");
if (toggle && header) {
  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}
dropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector(".dropdown-trigger");
  if (!trigger) return;
  trigger.addEventListener("click", (e) => {
    if (window.innerWidth <= 840) {
      e.preventDefault();
      const isOpen = dropdown.classList.toggle("open");
      trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }
  });
});
document.addEventListener("click", (e) => {
  dropdowns.forEach((dropdown) => {
    if (!dropdown.contains(e.target) && window.innerWidth <= 840) {
      dropdown.classList.remove("open");
      const trigger = dropdown.querySelector(".dropdown-trigger");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    }
  });
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 840 && header) {
    header.classList.remove("menu-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("open");
      const trigger = dropdown.querySelector(".dropdown-trigger");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    });
  }
});
