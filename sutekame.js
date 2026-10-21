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
// 絵本のサムネイルをクリックして拡大表示
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeButton = document.getElementById("modal-close");

document.querySelectorAll(".thumbnail img").forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    modalImage.src = thumbnail.src;
    modalImage.alt = thumbnail.alt;
    modal.style.display = "flex";
  });
});

// 背景をクリックして閉じる
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// × ボタンで閉じる
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Escキーで閉じる
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});
