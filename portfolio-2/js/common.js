/* ============== Show Menu =============== */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* === Menu Show === */
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* === Hide Show === */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* ============== Remove Menu Mobile =============== */
const navLinked = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When click on each link, will remove the show menu
  navMenu.classList.remove("show-menu");
}

navLinked.forEach((n) => n.addEventListener("click", linkAction));

/* ============== Background Header =============== */
function scrollHeader() {
  const header = document.getElementById("header");
  const activeLink = document.querySelectorAll(".nav__link");
  // when the scroll is greater than 50 viewport height, and the scroll-header class to header tag
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

/* ============== Contact Form =============== */
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  Message = document.getElementById("message"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // Check if the field has a value
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    Message.value === ""
  ) {
    // Add and remove color
    contactMessage.classList.remove("color-light");
    contactMessage.classList.add("color-dark");

    // Show message
    contactMessage.textContent = "Write all the input fields";
  } else {
    // ServiceID - templateID - #form - publickey
    emailjs
      .sendForm(
        "service_z9ekd6c",
        "template_en54rai",
        "#contact-form",
        "biccaHn8iHWQSH8Rk"
      )
      .then(
        () => {
          // Show message and add color, window + dot to open emoji
          contactMessage.classList.add("color-light");
          contactMessage.textContent = "Message sent ✔";

          // Remove message after 5 seconds
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OoPs! SOMETHING WENT WRONG ...", error);
        }
      );

    // clear input fields
    contactName.value = "";
    contactEmail.value = "";
    Message.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);

/* ============== Style Switcher =============== */
const styleSwitcherToggle = document.querySelector(".style__switcher-toggler"),
  styleSwitcher = document.querySelector(".style__switcher");

styleSwitcherToggle.addEventListener("click", () => {
  styleSwitcher.classList.toggle("open");
});

// Hide switcher on scroll
window.addEventListener("scroll", () => {
  if (styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.remove("open");
  }
});

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
