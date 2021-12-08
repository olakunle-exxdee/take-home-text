console.log("hello");

const show = document.querySelector(".footer-show");
const showText = document.querySelector(".footer-show-text");
const footerContent = document.querySelector(".footer-content");
const btns = document.querySelectorAll(".btn-darkblue");
const allBtns = document
  .querySelector(".filter-btn")
  .querySelectorAll(".btn-darkblue");
const methods = document
  .querySelector(".method")
  .querySelectorAll(".method-box");

let showTextValue = false;
show.addEventListener("click", function () {
  if (!showTextValue) {
    showText.textContent = "Hide";
    footerContent.classList.add("footer-show-hide");
    showTextValue = true;
  } else {
    showText.textContent = "Show";
    footerContent.classList.remove("footer-show-hide");
    showTextValue = false;
  }
});

allBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    allBtns.forEach((btn) => {
      btn.classList.remove("btn-active");
    });
    this.classList.add("btn-active");
    methods.forEach((method) => {
      if (method.classList.contains("method-box-active")) {
        method.classList.remove("method-box-active");
      } else {
        method.classList.add("method-box-active");
      }
    });
  });
});
