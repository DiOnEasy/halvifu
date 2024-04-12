let burger = document.querySelector(".burger");

let navBar = document.querySelector(".header__nav");

let walletAddress = document.querySelector(".footer__wallet span");

let copyButton = document.querySelector(".footer__wallet img");

let copyAlert = document.querySelector(".copy__alert");

let timeoutId;

burger.onclick = () => {
  navBar.classList.toggle("header__nav_opened");
  document.querySelector(".header__open").classList.toggle("none");
  document.querySelector(".header__close").classList.toggle("none");
  document.querySelector("body").classList.toggle("hidden");
};

copyButton.onclick = () => {
  var textarea = document.createElement("textarea");
  textarea.value = walletAddress.innerText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  copyAlert.classList.remove("none");

  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    copyAlert.classList.add("none");
  }, 1500);
};
