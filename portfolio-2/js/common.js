/*  ============== Setting JS like jQuery =============== */
const $ = document.querySelector.bind(document),
  $$ = document.querySelectorAll.bind(document);

/* ============== Background Header =============== */
function scrollHeader() {
  const header = document.getElementById("header");
  const activeLink = $$(".nav__link");
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
