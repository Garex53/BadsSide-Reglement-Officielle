document.addEventListener("DOMContentLoaded", () => {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === current) link.classList.add("active");
  });

  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  }

  const weaponButtons = document.querySelectorAll(".weapon-btn");
  const weaponPanels = document.querySelectorAll(".weapon-panel");
  weaponButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      weaponButtons.forEach(b => b.classList.remove("active"));
      weaponPanels.forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      const target = document.getElementById("weapon-" + btn.dataset.weapon);
      if (target) target.classList.add("active");
    });
  });
});
