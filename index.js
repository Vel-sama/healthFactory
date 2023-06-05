var video = document.getElementById("myVideo");
var btn = document.getElementById("btn");
const toggleBtn = document.querySelector('.toggle__btn');
const toggleIcon = document.querySelector('.toggle__btn i');
const dropDownMenu = document.querySelector('.dropdown__menu');

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');

  toggleIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


window.onload = function () {
  let video = document.getElementById('myVideo');
  video.play();

  const swiper = new Swiper('.swiper-container', {
    loop: true,
    paginationClickable: true,
    spaceBetween: 20,
    autoHeight: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1920: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      1028: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10
      }
    }
  });
};

let phone1 = document.getElementById("phone-1");
let phone2 = document.getElementById("phone-2");
let phone3 = document.getElementById("phone-3");
let phone4 = document.getElementById("phone-4");
let citySelect = document.getElementById("city");
let adress = document.getElementById("adress-1");
let adress2 = document.getElementById("adress-2");

let box1 = document.getElementById("irina_img");

citySelect.addEventListener("change", function() {
  let selectedCity = citySelect.value;
    if (selectedCity === "Vishneve") {
        phone1.innerText = "+38 (097) 2211022";
        phone2.innerText = "+38 (073) 2211022";
        phone3.innerText = "+38 (097) 2211022";
        phone4.innerText = "+38 (073) 2211022";
        adress.innerText = "вул. Машинобудівників 17– А";
        adress2.innerText = "вул. Машинобудівників 17– А";
       
    } else if (selectedCity === "Kiyv") {
        phone1.innerText = "+38 (066) 2211002";
        phone2.innerText = "+38 (068) 2211002";
        phone3.innerText = "+38 (066) 2211002";
        phone4.innerText = "+38 (068) 2211002";
        adress.innerText = "р-н Оболонь проспект Героїв Сталінграду 2Г";
        adress2.innerText = "р-н Оболонь проспект Героїв Сталінграду 2Г";
        box1.setAttribute("src", "./src/images/Pavlo_compressed.jpg");
    }
});


