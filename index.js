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

