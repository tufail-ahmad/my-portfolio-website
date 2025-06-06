/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /*==================== sticky navbar ====================*/
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*==================== scroll reveal ====================*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

if (window.innerWidth >= 992) {
  ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
  ScrollReveal().reveal(
    ".home-img, .services-container, .portfolio-box, .contact form",
    { origin: "bottom" }
  );
  ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
  ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
}

/*==================== typed js ====================*/
const typed = new Typed(".multiple-text", {
  strings: ["MERN Stack Developer", "APP Developer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/*==================== progress bar ====================*/
const spans = document.querySelectorAll(".progress-container span");

spans.forEach((span) => {
  span.style.width = span.dataset.width;
  span.innerHTML = span.dataset.width;
});

/*==================== read more btn functionality ====================*/
const toggleBtn = document.querySelectorAll(".toggle-btn");

toggleBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const moreText = btn.previousElementSibling;

    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btn.innerText = "Read Less"; // Adjust margin-top when expanded
    } else if (moreText.style.display === "inline") {
      // Collapse the text
      moreText.style.display = "none";
      btn.innerText = "Read More";
    }
  });
});
