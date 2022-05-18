// 토글 구현
// function toggle() {
//   if()
// }

const center = document.querySelector('.list-item');
let cardNum = 7;
const arr = new Array(cardNum);

for (let i = 0; i < arr.length; i++) {
  const elLi = document.createElement('li');
  const frontEl = document.createElement('div');
  const backEl = document.createElement('div');
  elLi.innerHTML = `<img src = "./images/jesus-g0ab7cab5e_640.png" alt = "">`;
  center.appendChild(elLi);
}
// arr.forEach(() => {
//   const elLi = document.createElement('li');
//   elLi.innerHTML = `<img src = "./images/jesus-g0ab7cab5e_640.png" alt = "">`;
//   center.appendChild(elLi);
// });

const items = center.querySelectorAll('li');

const radius = (items[0].offsetWidth * items.length) / 3.14 / 2;

items.forEach((item, index) => {
  if (index === 0) {
    item.style.transform = `rotateY(0) translateZ(${radius}px)`;
  } else {
    item.style.transform = `rotateY(${
      (360 / items.length) * index
    }deg) translateZ(${radius}px)`;
  }
});

const angle = 360 / items.length;
let currAngle = 0;

document.addEventListener('click', (event) => {
  if (items) {
  }
  if (window.innerWidth / 2 < event.clientX) {
    currAngle += angle;
  } else {
    currAngle -= angle;
  }

  center.style.transform = `translate(-50%, -50%) rotateY(${currAngle}deg)`;
});
