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

      if(t.total <= 0) {
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
