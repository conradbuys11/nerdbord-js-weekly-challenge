const icon = document.querySelector("div.icon");
const sideNav = document.querySelector("div.side-nav");

const iconTransition = (e) => {
  let icon = e.target;
  if (icon.classList.contains("line")) {
    icon = icon.parentNode;
    console.log("clicked on line, but fixed");
  }

  if (icon.classList.contains("menu-icon")) {
    icon.classList.replace("menu-icon", "close-icon");
    sideNav.classList.replace("closed", "open");
  } else if (icon.classList.contains("close-icon")) {
    icon.classList.replace("close-icon", "menu-icon");
    sideNav.classList.replace("open", "closed");
  } else {
    console.log("ya messed up in icon transition");
    console.log(e.target);
  }
};

icon.addEventListener("mousedown", iconTransition);
