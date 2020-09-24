let timerId = setTimeout(sayHello, 1000);
clearTimeout(timerId);

function sayHello() {
  alert("Привет!");
}