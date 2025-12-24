const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

  const arrow = document.querySelector(".arrow-icon-down");

  arrow.addEventListener("click", () => {
    arrow.classList.toggle("rotate");
  });

  document.querySelectorAll(".pill-fill").forEach((bar) => {
    bar.style.height = bar.dataset.value + "%";
  });

