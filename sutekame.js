// ハンバーガーメニュー
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// 簡単スライダー
let index = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });

  index++;
  if (index >= slides.length) index = 0;
}, 3000);

const btn = document.getElementById("toggleBtn");
const detail = document.getElementById("detailBox");

btn.addEventListener("click", () => {
  detail.classList.toggle("open");

  // 矢印の向き変更
  if (detail.classList.contains("open")) {
    btn.textContent = "▲";
  } else {
    btn.textContent = "▼";
  }
});
