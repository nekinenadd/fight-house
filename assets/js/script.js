



/**
 * navbar toggle
 */



/**
 * first training CTA note
 */
const firstTrainingTrigger = document.querySelector("[data-first-training-trigger]");
const firstTrainingDetails = document.querySelector("#first-training-details");

if (firstTrainingTrigger && firstTrainingDetails) {
  firstTrainingTrigger.addEventListener("click", function () {
    const isOpen = !firstTrainingDetails.hidden;

    if (!isOpen && window.goatcounter) {
      window.goatcounter.count({
        path: "first_training_note_open",
        title: "First training note opened",
        event: true,
      });
    }

    firstTrainingDetails.hidden = isOpen;
    firstTrainingTrigger.setAttribute("aria-expanded", String(!isOpen));
    firstTrainingTrigger.textContent = isOpen ? "Javi se za prvi dolazak" : "Pogledaj napomenu ispod";
  });
}

/**
 * goatcounter engagement tracking
 */

const trackGoatEvent = function (path, title) {
  if (!window.goatcounter || !window.goatcounter.count) return;

  window.goatcounter.count({
    path,
    title,
    event: true,
    no_session: true,
  });
};
 
const engagementTimers = [
  { seconds: 15, path: "stay_15s", title: "15 sekundi" },
  { seconds: 30, path: "stay_30s", title: "30 sekundi" },
  { seconds: 60, path: "stay_60s", title: "60 sekundi" },
  { seconds: 120, path: "stay_120s", title: "120 sekundi" },
];

engagementTimers.forEach(({ seconds, path, title }) => {
  window.setTimeout(function () {
    if (document.visibilityState === "visible") {
      trackGoatEvent(path, title);
    }
  }, seconds * 1000);
});


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
