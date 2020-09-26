window.addEventListener("DOMContentLoaded", function () {
  let containerTab = document.querySelector(".info-header"),
    tabBtn = document.querySelectorAll(".info-header-tab"),
    tabConetent = document.querySelectorAll(".info-tabcontent");

  function hideTabContent(a) {
    for (let i = a; i < tabConetent.length; i++) {
      tabConetent[i].classList.remove("show");
      tabConetent[i].classList.add("hide");
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabConetent[b].classList.contains("hide")) {
      tabConetent[b].classList.remove("hide");
      tabConetent[b].classList.add("show");
    }
  }

  containerTab.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tabBtn.length; i++) {
        if (e.target === tabBtn[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  let deadline = "2020-09-26";

  function getTimeRemaining(time) {
    let t = Date.parse(time) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor(t / (1000 * 60 * 60));

    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function setTimerClock(id, endtime) {
    let containerTimer = document.getElementById(id),
      hours = containerTimer.querySelector(".hours"),
      minutes = containerTimer.querySelector(".minutes"),
      seconds = containerTimer.querySelector(".seconds"),
      timeInterval = setInterval(updateTimer, 1000);

    function updateTimer() {
      let t = getTimeRemaining(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }

      if (t.hours <= 9) {
        hours.textContent = "0" + t.hours;
      } else if (t.minutes <= 9) {
        minutes.textContent = "0" + t.minutes;
      } else if (t.seconds <= 9) {
        seconds.textContent = "0" + t.seconds;
      }
    }
  }

  setTimerClock("timer", deadline);
});

// Modal

let btnMore = document.querySelector(".more"),
  modalWindow = document.querySelector(".overlay"),
  btnClose = document.querySelector(".popup-close");

btnMore.addEventListener("click", () => (modalWindow.style.display = "block"));

btnClose.addEventListener("click", () => (modalWindow.style.display = "none"));

// Modal #2

// function popupWindowCall(btn, modal, closePopup) {

//   let b = document.querySelector(btn),
//       m = document.querySelector(modal),
//       c = document.querySelector(closePopup);

//   return function callModalWindow() {
//     b.addEventListener('click', () => m.style.display = "block");
//     c.addEventListener('click', () => m.style.display = "none");
//   };

// }

// let callPopup = popupWindowCall('.more', '.overlay', '.popup-close');

// callPopup();
