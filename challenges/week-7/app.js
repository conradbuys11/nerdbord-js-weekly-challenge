const toggleButton = document.querySelector("span.dark-mode-toggle");
const body = document.querySelector("body");

const toggleDarkMode = (e) => {
  body.classList.toggle("dark");
};

toggleButton?.addEventListener("mousedown", toggleDarkMode);
