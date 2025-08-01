// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add scroll effect to navigation
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.style.background = "rgba(255, 255, 255, 0.98)";
  } else {
    nav.style.background = "rgba(255, 255, 255, 0.95)";
  }
});

// Animate cards on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all cards and project cards
document
  .querySelectorAll(".card, .project-card, .skill-item, .contact-item")
  .forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
  });

// Modal logic. When you click on a project, the modal opens with the project details  
const modalDetails = () => {
  const cards = document.querySelectorAll(".project-card");
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
  const modalCode = document.getElementById("modal-code");
  const modalDemo = document.getElementById("modal-demo");
  const closeBtn = document.getElementById("modal-close");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.dataset.title;
      const image = card.dataset.image;
      const description = card.dataset.description;
      const code = card.dataset.code;
      const demo = card.dataset.demo;

      modalTitle.textContent = title;
      modalImage.src = `img/${image}`;
      modalDescription.textContent = description;

      modalDemo.href = demo;
      modalCode.href = code;

      if (!demo) {
        modalDemo.style.display = "none";
      } else {
        modalDemo.style.display = "block";
      }

      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
};

modalDetails();

// When click in burger bottom show mobile menu
menu = document.querySelector(".nav-links")
burgerBottom = document.querySelector(".mobile-menu")
  .addEventListener("click", () => {
    menu.classList.toggle("hidden");
  })