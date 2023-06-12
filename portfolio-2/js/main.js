/* ============== Setting JS like jQuery =============== */
const $ = document.querySelector.bind(document),
  $$ = document.querySelectorAll.bind(document);

/* ============== Mixitup Filter =============== */
var mixer = mixitup(".projects__container", {
  selectors: {
    target: ".project__item",
  },
  animation: {
    duration: 300,
  },
});

/* Active Work */
const linkWork = $$(".category__btn");

function activeWork() {
  linkWork.forEach((a) => a.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((a) => a.addEventListener("click", activeWork));

/* ============== Testimonials Swiper =============== */
var testimonialSwiper = new Swiper(".testimonial__container", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

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
