var video = document.getElementById("myVideo");
var btn = document.getElementById("btn");
const toggleBtn = document.querySelector('.toggle__button')
const toggleIcon = document.querySelector('.toggle__button i')
const dropDownMenu = document.querySelector('.dropdown__menu')

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'

}