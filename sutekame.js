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
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeButton = document.getElementById("modal-close");

// 絵本のサムネイルをタップしたら拡大
document.querySelectorAll(".thumbnail img").forEach((img) => {
  img.addEventListener("click", () => {
    modalImage.src = img.src;
    modalImage.alt = img.alt;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

// 閉じる処理
function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
}

closeButton.addEventListener("click", closeModal);

// 画像の外側をタップしたら閉じる
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Escキーでも閉じる
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
