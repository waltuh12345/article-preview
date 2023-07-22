const theme = localStorage.getItem("theme");
const body = document.querySelector("body");

const toggle = document.querySelector(".theme-toggle");

const color = (value) => {
  if (value === "light") {
    body.classList.add("light-theme");
  } else {
    body.classList.remove("light-theme");
  }
};

toggle.addEventListener("click", (e) => {
  const input = toggle.querySelector("input");

  if (input.checked) {
    localStorage.setItem("theme", "light");
    color("light");
  } else {
    localStorage.setItem("theme", "dark");
    color("dark");
  }
});

const input = toggle.querySelector("input");

if (theme === "light") {
  console.log("light theme");
  input.checked = true;
  color("light");
} else {
  input.checked = false;
  console.log("dark theme");
  color("dark");
}
