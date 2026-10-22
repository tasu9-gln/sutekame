
/* =========================
   ハンバーガーメニュー
========================= */
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.style.display =
      menu.style.display === "block" ? "none" : "block";
  });
}


/* =========================
   簡単スライダー
========================= */
const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {
  let index = 0;

  function showSlide() {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${index * 100}%)`;
    });

    index++;

    if (index >= slides.length) {
      index = 0;
    }
  }

  // 最初のスライド位置を設定
  slides.forEach((slide) => {
    slide.style.transform = "translateX(0)";
  });

  // 3秒ごとに切り替え
  if (slides.length > 1) {
    setInterval(showSlide, 3000);
  }
}


/* =========================
   詳細表示ボタン
========================= */
const btn = document.getElementById("toggleBtn");
const detail = document.getElementById("detailBox");

if (btn && detail) {
  btn.addEventListener("click", () => {
    detail.classList.toggle("open");

    if (detail.classList.contains("open")) {
      btn.textContent = "▲";
    } else {
      btn.textContent = "▼";
    }
  });
}


/* =========================
   絵本の画像を拡大表示
========================= */
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeButton = document.getElementById("modal-close");

// 拡大表示用のHTMLがあるページだけで実行
if (modal && modalImage && closeButton) {

  // サムネイルをクリックしたら拡大
  document.querySelectorAll(".thumbnail img").forEach((img) => {
    img.addEventListener("click", () => {
      modalImage.src = img.src;
      modalImage.alt = img.alt || "絵本の拡大画像";

      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  // モーダルを閉じる
  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  // ×ボタンで閉じる
  closeButton.addEventListener("click", closeModal);

  // 画像の外側をクリックして閉じる
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Escキーで閉じる
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "flex") {
      closeModal();
    }
  });
}
