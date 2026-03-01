'use strict';



/**
 * add event on element
 */


window.onload = function () {
    window.scrollTo(0, 0); // Scroll to 500px down from the top
};


const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



function preloadImages(imageUrls) {
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
}


preloadImages([
  './assets/galerija/galerija1.webp',
  './assets/galerija/galerija2.webp',
  './assets/galerija/galerija3.webp',
  './assets/galerija/galerija4.webp',
  './assets/galerija/galerija5.webp',
  './assets/galerija/galerija6.webp',
  './assets/galerija/galerija7.webp',
  './assets/galerija/galerija8.webp',
  './assets/galerija/galerija9.webp'
]);



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

if (navbar && navTogglers.length) {
  const toggleNavbar = function () { navbar.classList.toggle("active"); }
  addEventOnElem(navTogglers, "click", toggleNavbar);
}

if (navbar && navLinks.length) {
  const closeNavbar = function () { navbar.classList.remove("active"); }
  addEventOnElem(navLinks, "click", closeNavbar);
}



/**
 * header & back top btn active
 */



const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    if (header) header.classList.add("active");
    if (backTopBtn) backTopBtn.classList.add("active");
  } else {
    if (header) header.classList.remove("active");
    if (backTopBtn) backTopBtn.classList.remove("active");
  }
});

/**
 * stats counters
 */
const counterElems = document.querySelectorAll("[data-counter]");

if (counterElems.length) {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const setCounterValue = function (elem, value) {
    const suffix = elem.dataset.suffix || "";
    elem.textContent = `${value}${suffix}`;
  };

  const animateCounter = function (elem) {
    const target = Number(elem.dataset.target) || 0;
    const duration = 1400;
    const startTime = performance.now();

    const tick = function (now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);

      setCounterValue(elem, current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCounterValue(elem, target);
      }
    };

    requestAnimationFrame(tick);
  };

  if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
    counterElems.forEach(elem => setCounterValue(elem, Number(elem.dataset.target) || 0));
  } else {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.5 });

    counterElems.forEach(elem => observer.observe(elem));
  }
}
