document.addEventListener("DOMContentLoaded", function(event) {
  const collapseButton = document.querySelector(".collapse");
  const content = document.querySelector("header nav ul");
  const mainElement = document.querySelector("main");

  collapseButton.addEventListener("click", function() {
    this.classList.toggle("active");

    if (content.style.display === "flex") {
      content.style.removeProperty("display");
      mainElement.style.removeProperty("margin-top");
    }
    if (content.style.display === "none") {
      content.style.display = "flex";
    }
  });

  window.addEventListener("resize", function() {
    mainElement.style.removeProperty("margin-top");
    const innerWidth = window.innerWidth;
    if (innerWidth > 576) {
      content.style.display = "flex";
    } else {
      content.style.display = "none";
    }
  });
});
