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


// document.querySelectorAll('.carousel').forEach( carousel => {
//   const items = carousel.querySelectorAll('.carousel__item');
//   const buttonsFromHtml = Array.from(items, () => {
//     return `<span class="carousel__button"></span>`
//   });
//   carousel.insertAdjacentHTML("beforeend", `
//   <div class="carousel__nav">
//     ${buttonsFromHtml.join('')}
//   </div>
//   `);
//   const buttons = carousel.querySelectorAll('.carousel__button');
//   buttons.forEach((button, i)  => {
//     button.addEventListener('click', () => {
//       items.forEach(item => item.classList.remove('carousel__item--selected'));
//       buttons.forEach(item => item.classList.remove('carousel__button--selected'));

//       items[i].classList.add('carousel__item--selected');
//       buttons[i].classList.add('carousel__button--selected');
//     })
    
//   })
//   items[0].classList.add('carousel__item--selected');
//   buttons[0].classList.add('carousel__button--selected');
// })


