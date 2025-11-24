let listFilm = [
  {
    id: 1,
    name: "Mưa  đỏ",
    type: "Phim chiếu",
    banner: "./640x396-muado.jpg",
    trailer:
      '<iframe width="1039" height="584" src="https://www.youtube.com/embed/BD6PoZJdt_M" title="MƯA ĐỎ | OFFICIAL TRAILER | Khởi chiếu tại rạp: 22.08.2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    nation: "Việt Nam",
    year: "2025",
    hours: "2 giờ ",
  },
  {
    id: 2,
    name: "Quái vật đen",
    type: "Phim chiếu rạp",
    banner: "./img/denjpg.jpg",
    trailer:
      ' trailer: "<iframe width="1039" height="584" src="https://www.youtube.com/embed/OVlEPPGSavQ" title="QUÁI VẬT ĐEN | Trailer | Dự kiến khởi chiếu: 12.05.2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>",',
    nation: "Mỹ",
    year: "2021",
    hours: "1 giờ 48 phút",
  },
  {
    id: 3,
    name: "Quý ông Plankton",
    type: "Phim chiếu rạp",
    banner: "./img/Quy.webp",
    trailer:
      '<iframe width="1039" height="584" src="https://www.youtube.com/embed/mt4wezFpLvA" title="Mr. Plankton | Official Trailer | Netflix EN-SUB" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    nation: "Hàn Quốc",
    year: "2025",
    hours: "2 giờ 10 phút",
  },
  {
    id: 4,
    name: "Sát thủ nhân tạo 2",
    type: "Phim chiếu rạp",
    banner: "./img/sat.webp",
    trailer:
      '<iframe width="1039" height="584" src="https://www.youtube.com/embed/NprcHuYuP54" title="SÁT THỦ NHÂN TẠO 2 | Official Trailer | KC 01.07.2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    nation: "Hàn",
    year: "2022",
    hours: "1 giờ 50 phút",
  },
  {
    id: 5,
    name: "Venom: kèo cuối",
    type: "Phim chiếu rạp",
    banner: "./img/ve.webp",
    trailer:
      '<iframe width="1039" height="584" src="https://www.youtube.com/embed/id1rfr_KZWg" title="Venom: Kèo cuối trailer - Dự kiến khởi chiếu 25.10.2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    nation: "Mỹ",
    year: "2022",
    hours: "1 giờ 50 phút",
  },
  {
    id: 6,
    name: "Bố già",
    type: "Phim chiếu rạp",
    banner: "./img/bo.webp",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Việt Nam",
  },
  {
    id: 7,
    name: "Cưới ma giải hạn",
    type: "Phim chiếu rạp",
    banner: "./img/cuoima.webp",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Việt Nam",
  },
  {
    id: 8,
    name: "Cô dâu hào môn",
    type: "Phim chiếu rạp",
    banner: "./img/wiffffe.webp",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Việt Nam",
  },
  {
    id: 9,
    name: "Nghi ngờ",
    type: "Phim chiếu rạp",
    banner: "./img/ngng.jpg",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Việt Nam",
  },
  {
    id: 10,
    name: "Gặp lại chị bầu",
    type: "Phim chiếu rạp",
    banner: "",
    banner: "./img/Bau.webp",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Việt Nam",
  },
  {
    id: 11,
    name: "Tuyệt đỉnh khungfu",
    type: "Phim chiếu rạp",
    banner: "./img2/kungfu.png",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Trung Quốc",
  },
  {
    id: 12,
    name: "Găng tơ tái xuất",
    type: "Phim chiếu rạp",
    banner: "./img2/gangto.png",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Hàn Quốc",
  },
  {
    id: 13,
    name: "Đặc nhiệm mĩ nhân",
    type: "Phim chiếu rạp",
    banner: "./img2/mynu.png",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Việt Nam",
  },
  {
    id: 14,
    name: "Viên đạn ma",
    type: "Phim chiếu rạp",
    banner: "./img2/viendan.png",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Việt Nam",
  },
  {
    id: 15,
    name: "Hỏa long đối quyết",
    type: "Phim chiếu rạp",
    banner: "./img2/long.png",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Việt Nam",
  },
  {
    id: 16,
    name: "Mưa  đỏ",
    type: "Phim chiếu rạp",
    banner: "./img2/co-gai-tu-qua-khu.jpg",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Việt Nam",
  },
  {
    id: 17,
    name: "Hai muối",
    type: "Phim chiếu rạp",
    banner: "./img2/hai-muoi-fpt-play.jpg",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Việt Nam",
  },
  {
    id: 18,
    name: "Mặt trời con ở đâu ",
    type: "Phim chiếu rạp",
    banner: "./img2/mat-troi-con-o-dau.jpg",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Việt Nam",
  },
  {
    id: 19,
    name: "Tro tàn rực rỡ",
    type: "Phim chiếu rạp",
    banner: "./img2/tro-tan-ruc-ro-fpt.jpg",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Việt Nam",
  },
  {
    id: 20,
    name: "Trịnh Công Sơn",
    type: "Phim chiếu rạp",
    banner: "./img2/trinh-cong-son-fptjpg.jpg",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Việt Nam",
  },
  {
    id: 21,
    name: "Quỷ nguyệt",
    type: "Phim chiếu rạp",
    banner: "./img2/quynguyent.webp",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Mỹ",
  },
  {
    id: 22,
    name: "Thám tử kiên",
    type: "Phim chiếu rạp",
    banner: "./img2/thamtukien.webp",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Việt Nam",
  },
  {
    id: 23,
    name: "Đoạt xác",
    type: "Phim chiếu rạp",
    banner: "./img2/doatxac.webp",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Mỹ",
  },
  {
    id: 24,
    name: "Quật mộ trùng ma",
    type: "Phim chiếu rạp",
    banner: "./img2/quattrung.webp",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Hàn",
  },
  {
    id: 25,
    name: "Mưa  đỏ",
    type: "Phim chiếu rạp",
    banner: "./img2/hamtu.webp",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Việt Nam",
  },
  {
    id: 26,
    name: "Mưa  đỏ",
    type: "Phim chiếu rạp",
    banner: "./img2/nhagia.webp",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Việt Nam",
  },
  {
    id: 27,
    name: "Mưa  đỏ",
    type: "Phim chiếu rạp",
    banner: "./img2/chi13.webp",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Việt Nam",
  },
  {
    id: 28,
    name: "Mưa  đỏ",
    type: "Phim chiếu rạp",
    banner: "./img2/oldgrild.webp",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Việt Nam",
  },
  {
    id: 29,
    name: "Mưa  đỏ",
    type: "Phim chiếu rạp",
    banner: "./img2/congtu.webp",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Việt Nam",
  },
  {
    id: 30,
    name: "Mưa  đỏ",
    type: "Phim chiếu rạp",
    banner: "./img2/trang.webp",
    trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI&list=PPSV",
    nation: "Việt Nam",
  },
];
let bannerElement = document.getElementsByClassName("banner")[0];
let imageElement = document.getElementsByClassName("im")[0];
let trailerElement = document.getElementsByClassName("trailer")[0];
let currentSelectedFilm = null;

window.onload = function () {
  chooseFilm(1);
};

function trailer() {
  if (!currentSelectedFilm) {
    chooseFilm(1);
  }

  trailerElement.innerHTML = currentSelectedFilm.trailer;

  bannerElement.style.display = "none";
  trailerElement.style.display = "block";
}

function chooseFilm(filmId) {
  let selectedFilm = listFilm.find((film) => film.id === filmId);
  // bannerElement.src = "09_68bfea5810013f0001205210.jpg";
  if (selectedFilm) {
    currentSelectedFilm = selectedFilm;
    imageElement.src = selectedFilm.banner;

    let nationElement = document.getElementsByClassName("nation")[0];
    let yearElement = document.getElementsByClassName("year")[0];
    let hoursElement = document.getElementsByClassName("hours")[0];

    yearElement.innerHTML = selectedFilm.year;
    nationElement.innerHTML = selectedFilm.nation;
    hoursElement.innerHTML = selectedFilm.hours;
  }
  // alert("hello");
}
