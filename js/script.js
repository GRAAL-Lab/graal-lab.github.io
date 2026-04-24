document.getElementById("year").textContent = new Date().getFullYear();

const sonar = document.querySelector(".sonar");

if (sonar) {
  sonar.addEventListener("mousemove", (e) => {
    const rect = sonar.getBoundingClientRect();
    const ping = document.createElement("div");
    ping.className = "ping active";
    ping.style.left = (e.clientX - rect.left) + "px";
    ping.style.top = (e.clientY - rect.top) + "px";
    sonar.appendChild(ping);
    setTimeout(() => ping.remove(), 1200);
  });
}

const toggleButton = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
}

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("nav-open");
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("nav-open");
      document.body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (e) => {
    const clickedInsideMenu = mobileNav.contains(e.target);
    const clickedToggle = menuToggle.contains(e.target);

    if (!clickedInsideMenu && !clickedToggle && mobileNav.classList.contains("nav-open")) {
      mobileNav.classList.remove("nav-open");
      document.body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}
