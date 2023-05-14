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
  
  
