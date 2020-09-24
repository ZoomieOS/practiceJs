let btnAnimate = document.querySelector('.btn'),
    box = document.querySelector('.box');

function animationBox() {
  let pos = 0,
      idPos = setInterval(frame, 10);

  function frame() {
    if(pos === 300) {
      clearInterval(idPos);
    } else {
      pos++;
      box.style.top = pos + 'px';
      box.style.left = pos + 'px';
    }
}
};

btnAnimate.addEventListener('click', animationBox);


let btnBlock = document.querySelector('.btn-block'),
    btn = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
    if (event.target && event.target.matches('button.clickBtn')) {
      console.log("Hello!");
    }
});