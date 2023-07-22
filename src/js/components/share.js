import "animate.css";

let isAnimating = false;
const body = document.querySelector("body");

const animate = (elem, name, duration = "800") => {
  return new Promise((resolve, reject) => {
    if (isAnimating) {
      reject("animation is not finished");
      return;
    }

    elem.style.animation = `${name} ${duration}ms`;
    isAnimating = true;

    function handleAnimation(e) {
      e.stopPropagation();
      elem.style.animation = ``;
      isAnimating = false;
      resolve("animation finished");
    }

    elem.addEventListener("animationend", handleAnimation, {
      once: true,
    });
  });
};

const shareTrigger = document.querySelector(".share-trigger");
const shareAppearance = () => {
  const content = document.querySelector(".share-content");
  const links = content.querySelectorAll("li");

  if (isAnimating) return;

  shareTrigger.classList.toggle("active");

  if (shareTrigger.classList.contains("active")) {
    content.style.display = "flex";
    links.forEach((link) => {
      link.style.display = "none";
    });

    animate(content, "fadeIn").then(() => {
      links.forEach((link) => {
        link.style.display = "";
        link.style.animation = "fadeInLeft 600ms";
      });
    });
  } else {
    animate(content, "fadeOut").then(() => (content.style.display = ""));
  }
};

shareTrigger.addEventListener("click", shareAppearance);
