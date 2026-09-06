



// ===========================
//        NAVBAR TOGGLE
// ===========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close nav when a link is clicked (mobile UX)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// ===========================
//      NAVBAR SCROLL STYLE
// ===========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0, 119, 182, 0.95)";
    navbar.style.padding = "12px 8%";
  } else {
    navbar.style.background = "rgba(52, 140, 192, 0.15)";
    navbar.style.padding = "18px 8%";
  }
});

// ===========================
//      SCROLL TO TOP BUTTON
// ===========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topBtn.style.display = "flex";
    topBtn.style.justifyContent = "center";
    topBtn.style.alignItems = "center";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===========================
//    PRODUCT CATALOGUE FILTER
// ===========================

const catTabs = document.querySelectorAll(".cat-tab");
const storeCards = document.querySelectorAll(".store-card");

catTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    catTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.getAttribute("data-filter");

    storeCards.forEach((card) => {
      const category = card.getAttribute("data-category") || "";

      if (filter === "all" || category.includes(filter)) {
        card.classList.remove("hidden");
        card.style.animation = "none";
        card.offsetHeight;
        card.style.animation = "fadeUp 0.4s ease forwards";
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// ===========================
//    SCROLL REVEAL (simple)
// ===========================

const revealElements = document.querySelectorAll(
  ".product-card, .service-box, .store-card, .stat-box, .box"
);

const revealOnScroll = () => {
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
};

// Set initial state
revealElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);




function moveTestimonial(direction) {

    const container = document.getElementById("testimonialContainer");

    container.scrollBy({
        left: direction * 730,
        behavior: "smooth"
    });

}