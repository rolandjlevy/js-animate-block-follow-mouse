const $ = (elem) => document.querySelector(elem);
const $$ = (elem) => document.querySelectorAll(elem);

const blockSize = 50;
const amount = 100;
let count = 0;
let deg = 0;

while (count++ < amount) {
  const block = document.createElement('div');
  block.className = 'block';
  $('.wrapper').appendChild(block);
}

document.addEventListener('click', (e) => {
  deg += 360;
  $$('.block').forEach((block, index, array) => {
    const x = e.clientX - blockSize/2;
    const y = e.clientY - blockSize/2;
    block.style.transform = `translate(${x}px, ${y}px) rotate(${deg}deg) scale(${1 - (index+1)/array.length + 1/array.length})`;
    block.style.transition = `transform ${0.25 + (index+1) * 0.2}s ease-in-out`;
  });
}, false);