document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const logo = document.getElementById("logo");
  const mobileLogo = document.getElementById("mobile-logo");
  const hamburgerLines = document.querySelectorAll(".hamburger-line");

  let isMenuOpen = false;

  hamburgerLines.forEach((line) => {
    line.style.transformOrigin = "center";
    line.style.transition = "all 0.3s ease-in-out";
  });

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("flex");
      setTimeout(() => {
        mobileMenu.classList.remove("translate-x-full");
        mobileMenu.classList.add("translate-x-0");
      }, 10);

      hamburgerLines[0].style.transform = "rotate(45deg) translate(6px, 6px)";
      hamburgerLines[0].style.backgroundColor = "white";
      hamburgerLines[1].style.opacity = "0";
      hamburgerLines[2].style.transform = "rotate(-45deg) translate(6px, -6px)";
      hamburgerLines[2].style.backgroundColor = "white";

      document.body.classList.add("overflow-hidden");
    } else {
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("translate-x-full");

      hamburgerLines[0].style.transform = "none";
      hamburgerLines[0].style.backgroundColor = "#374151";
      hamburgerLines[1].style.opacity = "1";
      hamburgerLines[2].style.transform = "none";
      hamburgerLines[2].style.backgroundColor = "#374151";

      document.body.classList.remove("overflow-hidden");

      setTimeout(() => {
        mobileMenu.classList.remove("flex");
        mobileMenu.classList.add("hidden");
      }, 300);
    }
  }

  if (hamburger && mobileMenu && logo && mobileLogo) {
    hamburger.addEventListener("click", toggleMenu);

    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu) {
        if (isMenuOpen) {
          toggleMenu();
        }
      }
    });

    const menuLinks = mobileMenu.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (isMenuOpen) {
          toggleMenu();
        }
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        toggleMenu();
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((panel) => panel.classList.add("hidden"));

      tab.classList.add("active");
      const target = tab.getAttribute("data-target");
      document.querySelector(`.panel.${target}`).classList.remove("hidden");
    });
    tab.setAttribute("tabindex", "0");
    tab.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        tab.click();
      }
    });
  });

  if (tabs.length && panels.length) {
    tabs[0].classList.add("active");
    panels[0].classList.remove("hidden");
  }
});
