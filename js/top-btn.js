const goTopBtn = document.getElementById("top");

window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", backToTop);

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function trackScroll() {
  let scrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goTopBtn.classList.add("top-show");
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove("top-show");
  }
}
