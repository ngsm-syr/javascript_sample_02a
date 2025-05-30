//javascript

//5-1｜繰り返し
const btnRed = document.querySelector('.btn-red');
const btnGreen = document.querySelector('.btn-green');
const btnBlue = document.querySelector('.btn-blue');

btnRed.addEventListener('click', () => {
  document.body.style.backgroundColor = 'red';
});
btnGreen.addEventListener('click', () => {
  document.body.style.backgroundColor = 'green';
});
btnBlue.addEventListener('click', () => {
  document.body.style.backgroundColor = 'blue';
});

// 5-2｜引数
const btnArgs = document.querySelectorAll('.btn-arg');
btnArgs.forEach(btn => {
  btn.addEventListener('click', () => {
    const color = btn.getAttribute('data-color');
    document.body.style.backgroundColor = color;
  });
});

// ランダムな16進6桁のカラーコードを生成（汎用性のある関数）
function randomColor() {
  const col = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
  return '#' + col;
}

// ６｜汎用性のある関数
const btnGeneric = document.querySelector('.btn-generic');
btnGeneric.addEventListener('click', () => {
  document.body.style.backgroundColor = randomColor();
});
