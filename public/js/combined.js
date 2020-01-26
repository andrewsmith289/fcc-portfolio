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
    else {
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

document.addEventListener("DOMContentLoaded", function(event) {
  let liEls = document.querySelectorAll("ul li");
  let index = 0;
  window.show = function(increase) {
    index = index + increase;
    index = Math.min(Math.max(index, 0), liEls.length - 1);
    liEls[index].scrollIntoView({ behavior: "smooth" });
  };
});
