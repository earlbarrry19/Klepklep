// =========================
// SCROLL REVEAL
// =========================

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },
  {
    threshold: 0.1
  }
);


// Find all elements with .reveal
document
  .querySelectorAll(".reveal")
  .forEach((element) => {

    observer.observe(element);

  });


// =========================
// CLOSE OBSERVER WHEN DONE
// =========================

document
  .querySelectorAll(".reveal")
  .forEach((element) => {

    element.addEventListener(
      "transitionend",
      () => {

        if (element.classList.contains("visible")) {

          observer.unobserve(element);

        }

      },
      {
        once: true
      }
    );

  });