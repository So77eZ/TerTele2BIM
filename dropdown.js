document.querySelectorAll(".dropdown > span").forEach((item) => {
  item.addEventListener("click", () => {
    item.nextElementSibling.style.display =
      item.nextElementSibling.style.display === "block" ? "none" : "block";
  });
});
