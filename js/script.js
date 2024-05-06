"use strict";

const tocBoxContent = document.querySelector(".toc-content-box");
const tocRightIcon = document.querySelector(".toc-right");

document.querySelector(".btn-toc").addEventListener("click", function () {
  tocBoxContent.classList.toggle("toc-open");
  tocRightIcon.style.transform = "rotate(90deg)";
});
const faq = document.querySelectorAll(".faq");

faq.forEach((container) => {
  const question = container.querySelector(".question");

  question.addEventListener("click", function () {
    container.classList.toggle("active");
  });
});

// const openMinus = function () {
//   minus.classList;
// };
// var typed = new Typed(".auto-typed", {
//   strings: ["Latest Games", "Latest Apps", "Latest Mod Apks", "2024"],

//   typeSpeed: 100,
//   backSpeed: 100,
//   loop: true,
// });

// var type = new Typed(".auto-type", {
//   strings: [
//     " Vblink Premium Features",
//     "Unlimited Bonuses",
//     "Free play",
//     "2024",
//   ],

//   typeSpeed: 100,
//   backSpeed: 100,
//   loop: true,
// });
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

document.querySelector(".toc-list").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("toc-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
// Menu fade animation
const nav = document.querySelector(".header");

const fadeNavigation = function (e) {
  if (e.target.classList.contains("main-nav-link")) {
    const link = e.target;
    const siblings = link.closest(".header").querySelectorAll(".main-nav-link");
    const logo = link.closest(".header").querySelector("img");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener("mouseover", fadeNavigation.bind(0.5));
nav.addEventListener("mouseout", fadeNavigation.bind(1));

// const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
// e.preventDefault();
// const href = link.getAttribute("href");
// Scroll back to top
// if (href === "#")
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// Scroll to other links
// if (href !== "#" && href.startsWith("#")) {
//   const sectionEl = document.querySelector(href);
//   sectionEl.scrollIntoView({ behavior: "smooth" });
// }
// Close mobile naviagtion
// if (link.classList.contains("main-nav-link"))
//   headerEl.classList.toggle("nav-open");
//   });
// });
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");
const header = document.querySelector(".header");
const navHight = nav.getBoundingClientRect().height;
const stickyNav = function (enteries) {
  const [entry] = enteries;

  if (!entry.isIntersecting) document.body.classList.add("sticky");
  else document.body.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHight}px`,
});

headerObserver.observe(sectionHeroEl);
// Reveal Sections
const allSections = document.querySelectorAll(".section");
console.log(allSections);
const revealSection = function (enteries, observe) {
  const [entry] = enteries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  if (entry.isIntersecting) entry.target.classList.remove("section--hidden");
  else entry.target.classList.add("section--hidden");
  observe.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});
allSections.forEach((section) => {
  section.classList.add("section--hidden");
  sectionObserver.observe(section);
});
// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(sectionHeroEl);
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button aria-label="dots" class="dots__dot" data-slide="${i}" ></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
