document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");

  const openNav = () => {
    menu.classList.add("active");
  };

  const closeNav = () => {
    menu.classList.remove("active");
  };

  document.addEventListener("click", (event) => {
    const { target } = event;

    if (
      (target.closest(".menu") &&
        !target.classList.contains("menu-content__link")) ||
      target.classList.contains("menu-close")
    ) {
      closeNav();
    }

    if (target.classList.contains("header-btn")) {
      openNav();
    }
  });
});
