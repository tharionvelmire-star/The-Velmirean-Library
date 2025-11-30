// === SEARCH FUNCTION (buat index.html) ===
const searchInput = document.querySelector(".search-box input");
const mangaCards = document.querySelectorAll(".manga-card");

if (searchInput) {
  function runSearch() {
    const searchValue = searchInput.value.toLowerCase();

    mangaCards.forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      if (title.includes(searchValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("input", runSearch);
}

// ============================
// === DATA MANGA ===
// ============================
const mangaData = {
  another: {
    title: "Wrong Guy Isekai",
    description: ".",
    chapters: {
      1: ["1.png", "2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png","1.png","13.png","14.png","1.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png","22.png","23.png","24.png",],
    },
  },
  biko: {
    title: "Biko",
    description: "Kisah perjalanan dua sahabat mencari arti hidup.",
    chapters: {
      1: ["manga/biko/chapter1/001.jpg", "manga/biko/chapter1/002.jpg"],
    },
  },
};

// ============================
// === PARAMETER DARI URL ===
// ============================
const urlParams = new URLSearchParams(window.location.search);
const mangaName = urlParams.get("manga");
const chapterNumber = parseInt(urlParams.get("chapter")) || 1;

// ============================
// === HALAMAN: CHAPTER LIST ===
// ============================
const chapterListDiv = document.getElementById("chapter-list");
const mangaTitle = document.getElementById("manga-title");

if (chapterListDiv && mangaName && mangaData[mangaName]) {
  const manga = mangaData[mangaName];
  mangaTitle.textContent = manga.title;

  let html = `<h2>${manga.title}</h2><p>${manga.description}</p><ul>`;
  const chapters = Object.keys(manga.chapters);

  chapters.forEach((ch) => {
    html += `<li><a href="reader.html?manga=${mangaName}&chapter=${ch}">Chapter ${ch}</a></li>`;
  });

  html += "</ul>";
  chapterListDiv.innerHTML = html;
}

// ============================
// === HALAMAN: READER ===
// ============================
const readerDiv = document.getElementById("reader");
const readerTitle = document.getElementById("reader-title");

if (readerDiv && mangaName && mangaData[mangaName]) {
  const chapterData = mangaData[mangaName].chapters[chapterNumber];
  if (chapterData) {
    readerTitle.textContent = `${mangaData[mangaName].title} - Chapter ${chapterNumber}`;
    chapterData.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.classList.add("manga-page");
      readerDiv.appendChild(img);
    });
  } else {
    readerDiv.innerHTML =
      "<p style='color:white;text-align:center'>Chapter tidak ditemukan.</p>";
  }
}

// ============================
// === NEXT / PREV CHAPTER ===
// ============================
const prevBtn = document.getElementById("prevChapter");
const nextBtn = document.getElementById("nextChapter");

if (prevBtn && nextBtn && mangaName && mangaData[mangaName]) {
  prevBtn.addEventListener("click", () => {
    if (chapterNumber > 1) {
      window.location.href = `reader.html?manga=${mangaName}&chapter=${
        chapterNumber - 1
      }`;
    } else {
      alert("Ini adalah chapter pertama!");
    }
  });

  nextBtn.addEventListener("click", () => {
    const total = Object.keys(mangaData[mangaName].chapters).length;
    if (chapterNumber < total) {
      window.location.href = `reader.html?manga=${mangaName}&chapter=${
        chapterNumber + 1
      }`;
    } else {
      alert("Belum ada chapter selanjutnya!");
    }
  });
}

