// === Data Manga dan Chapter ===
const mangaData = {
  another: {
    title: "Wrong Guy Isekai",
    cover: "cover manga.jpg",
    desc: "Seorang remaja berusia 18 tahun pergi ke Jepang untuk menepati janji lama dengan teman onlinenya yang telah meninggal. Dalam perjalanan mencari makam sang teman, ia tersesat di sebuah sekolah dan diselamatkan oleh seseorang. Namun, pertemuan itu justru membawanya ke dunia lain yang dimana tempat sihir, bahaya, dan takdir baru menantinya. Di dunia asing itu, ia harus bertahan hidup.",
    chapters: [
      { id: 1, title: "Chapter 1: Awal dari cerita" },
      //{ id: 2, title: "Chapter 2: Sosok Misterius" },
      //{ id: 3, title: "Chapter 3: Malam Berdarah" },
    ],
  },
  biko: {
    title: "Biko",
    cover: "file:///C:/Users/ayazu/Downloads/024.jpg",
    desc: "Petualangan gadis kecil bernama Biko di dunia fantasi penuh misteri dan persahabatan.",
    chapters: [
      { id: 1, title: "Chapter 1: Dunia Baru" },
      { id: 2, title: "Chapter 2: Teman Pertama" },
    ],
  },
};

// === Ambil parameter manga dari URL ===
const params = new URLSearchParams(window.location.search);
const mangaKey = params.get("manga");

// === Ambil elemen HTML ===
const mangaTitle = document.getElementById("manga-title");
const mangaCover = document.getElementById("manga-cover");
const mangaDesc = document.getElementById("manga-desc");
const chapterList = document.getElementById("chapter-list");

// === Tampilkan data manga ===
// === Tampilkan data manga ===
if (mangaKey && mangaData[mangaKey]) {
  const manga = mangaData[mangaKey];

  mangaTitle.textContent = manga.title;
  mangaCover.src = manga.cover;
  mangaDesc.textContent = manga.desc;

  // === GANTI WARNA TEKS DI SINI ===
  mangaTitle.style.color = "red"; // warna judul
  mangaDesc.style.color = "gray"; // warna deskripsi
  // chapterList bisa diwarnai nanti di loop

  manga.chapters.forEach((ch) => {
    const item = document.createElement("div");
    item.classList.add("chapter-item");

    const title = document.createElement("span");
    title.textContent = ch.title;

    // UBAH WARNA JUDUL CHAPTER
    title.style.color = "red";

    const readBtn = document.createElement("a");
    readBtn.textContent = "Read";
    readBtn.href = `reader.html?manga=${mangaKey}&chapter=${ch.id}`;

    item.appendChild(title);
    item.appendChild(readBtn);
    chapterList.appendChild(item);
  });
} else {
  mangaTitle.textContent = "Manga not found";
}

chapters: [
  {
    number: 1,
    title: "The Beginning",
    desc: "Awal kisah dimulai...",
  },
  //{ number: 2, title: "The Secret", desc: "Rahasia mulai terungkap..." },
  //{ number: 3, title: "The Truth", desc: "Pertarungan dengan kebenaran..." },
  //{ number: 4, title: "The Final", desc: "Akhir dari perjalanan panjang..." },
];

