import "../scss/main.scss";
const loadingWrapper = document.querySelector(".loading-wrapper");
Promise.all(
  [import("./theme/svg"), import("./components/share")],
  import("./components/theme")
).then(() => {
  loadingWrapper.style.display = "none";
});
