// select span
// const date = document.getElementById("date");
// date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".header__toggle");
const linksContainer = document.querySelector(".header__inner");
const links = document.querySelector(".header__list");
const navbar = document.getElementById("header");
const topLink = document.querySelector(".top-link");

navToggle.addEventListener("click", function () {
  links.classList.toggle("header__list--show");
  navbar.classList.toggle("header--show");
});

// **********  fixed navbar ************

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("header--fixed");
  } else {
    navbar.classList.remove("header--fixed");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".header__list-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("header--fixed");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    // linksContainer.style.height = 0;
  });
});
// calculate heights
