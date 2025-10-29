let listFilm = [
  {
    id: 1,
    name: "Mưa  đỏ",
    type: "Phim hoạt hình",
    banner: "fpt/640x396-muado.jpg",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Việt Nam",
  },
];
let bannerElement = document.getElementsByClassName("im")[0];

function trailer() {
  let trailerElement = document.getElementsByClassName("trailer")[0];

  bannerElement.style.display = "none";
  trailerElement.style.display = "block";
}

function chooseFilm(filmId) {
  alert("123");
  //   let selectedFilm = listFilm.find((film) => film.id === filmId);
  bannerElement.src = "09_68bfea5810013f0001205210.jpg";
}
