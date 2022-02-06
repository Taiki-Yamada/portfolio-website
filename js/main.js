"use strict";
{
  
// ハンバーガーメニュー
const spMenu = document.getElementById("spMenu");
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
function spMenuToggle() {
  hamburger.classList.toggle("hidden");
  close.classList.toggle("hidden");
  spMenu.classList.toggle("spMenuOpen");
}
hamburger.addEventListener("click", spMenuToggle);
close.addEventListener("click", spMenuToggle);

// 年齢自動計算
let today = new Date();
document.querySelectorAll("[data-birth]").forEach((element) => {
  let birth = element.getAttribute("data-birth");
  if (birth.match(/^\d{4}(-|\/)\d{2}(-|\/)\d{2}$/)) {
    let birthDate = new Date(birth);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    age = Math.max(age, 0);
    element.innerHTML = age;
  }
});

// モーダルウィンドウ
const movieMarks = document.getElementById("movieMarks");
const movieMarksModal = document.getElementById("movieMarksModal");
const myPortfolio = document.getElementById("myPortfolio");
const myPortfolioModal = document.getElementById("myPortfolioModal");
const mask = document.getElementById("mask");
const modalClose = document.querySelectorAll(".modalClose");
function performanceToggle(performance) {
  performance.classList.toggle("hidden");
  mask.classList.remove("hidden");
}
function addHidden() {
  movieMarksModal.classList.add("hidden");
  myPortfolioModal.classList.add("hidden");
  mask.classList.add("hidden");
}
movieMarks.addEventListener("click", () => {performanceToggle(movieMarksModal)});
myPortfolio.addEventListener("click", () => {performanceToggle(myPortfolioModal)});
mask.addEventListener("click", addHidden);
modalClose.forEach(function (close) {
  close.addEventListener('click', addHidden);
});
}

