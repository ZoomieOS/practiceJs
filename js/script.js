window.addEventListener("DOMContentLoaded", () => {
  let containerTab = document.querySelector(".info-header"),
    tabBtn = document.querySelectorAll(".info-header-tab"),
    tabConetent = document.querySelectorAll(".info-tabcontent");

  const hideTabContent = (a) => {
    for (let i = a; i < tabConetent.length; i++) {
      tabConetent[i].classList.remove("show");
      tabConetent[i].classList.add("hide");
    }
  };

  hideTabContent(1);

  const showTabContent = (b) => {
    if (tabConetent[b].classList.contains("hide")) {
      tabConetent[b].classList.remove("hide");
      tabConetent[b].classList.add("show");
    }
  };

  containerTab.addEventListener("click", (e) => {
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

  const deadline = "2020-09-28";

  const getTimeRemaining = (time) => {
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
  };

  const setTimerClock = (id, endtime) => {
    let containerTimer = document.getElementById(id),
      hours = containerTimer.querySelector(".hours"),
      minutes = containerTimer.querySelector(".minutes"),
      seconds = containerTimer.querySelector(".seconds");

    setInterval(() => {
      let t = getTimeRemaining(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      t.total <= 0 ? clearInterval() : false;

      switch (true) {
        case t.total <= 9:
          hours.textContent = "0" + t.hours;
          break;
        case t.miuntes <= 9:
          minutes.textContent = "0" + t.minutes;
          break;
        case t.seconds <= 9:
          seconds.textContent = "0" + t.seconds;
          break;
      }
    }, 1000);
  };

  setTimerClock("timer", deadline);

  // Modal

  let btnMore = document.querySelector(".more"),
    modalWindow = document.querySelector(".overlay"),
    btnClose = document.querySelector(".popup-close");

  btnMore.addEventListener(
    "click",
    () => (modalWindow.style.display = "block")
  );

  btnClose.addEventListener(
    "click",
    () => (modalWindow.style.display = "none")
  );
});