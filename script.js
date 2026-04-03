const siteConfig = {
  instagramUrl: "https://www.instagram.com/prisc.ila7285",
  whatsappNumber: "554797392987",
  whatsappMessage:
    "Oi, Pri! Vim pelo seu site e gostaria de conversar sobre um ensaio ou cobertura fotografica.",
};

const normalizedWhatsapp = siteConfig.whatsappNumber.replace(/\D/g, "");
const encodedMessage = encodeURIComponent(siteConfig.whatsappMessage);
const whatsappUrl = normalizedWhatsapp
  ? `https://wa.me/${normalizedWhatsapp}?text=${encodedMessage}`
  : `https://wa.me/?text=${encodedMessage}`;

document.querySelectorAll("[data-instagram]").forEach((link) => {
  link.href = siteConfig.instagramUrl;
});

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = whatsappUrl;
});

const whatsappStatus = document.querySelector("[data-whatsapp-status]");

if (whatsappStatus) {
  whatsappStatus.textContent = normalizedWhatsapp
    ? "."
    : "Para receber mensagens no seu numero, edite o campo whatsappNumber em script.js.";
}

const yearElement = document.getElementById("current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const revealElements = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxTriggers = document.querySelectorAll("[data-lightbox-src]");
const lightboxCloseButtons = document.querySelectorAll("[data-lightbox-close], .lightbox-close");

function closeLightbox() {
  if (!lightbox || !lightboxImage) {
    return;
  }

  lightbox.hidden = true;
  lightboxImage.src = "";
  lightboxImage.alt = "";
  document.body.style.overflow = "";
}

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImage) {
    return;
  }

  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

lightboxTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    openLightbox(trigger.dataset.lightboxSrc, trigger.dataset.lightboxAlt || "");
  });
});

lightboxCloseButtons.forEach((button) => {
  button.addEventListener("click", closeLightbox);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox && !lightbox.hidden) {
    closeLightbox();
  }
});
