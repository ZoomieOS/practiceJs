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

  // Send data

  let message = {
    loading: "Загрузка",
    success: "Спасибо! Скоро мы с Вами свяжемся",
    failure: "Что-то пошло не так!",
  };

  let form = document.querySelector(".main-form"),
    input = form.getElementsByTagName("input"),
    statusMessage = document.createElement("div");

  statusMessage.classList.add("status");

  // AJAX Method

  // form.addEventListener("submit", function (event) {
  //   event.preventDefault();
  //   form.appendChild(statusMessage);

  //   let request = new XMLHttpRequest();

  //   request.open("POST", "server.php");
  //   (request.setRequestHeader = "Content-Type"),
  //     "application/json; chatset=utf8";

  //   let formData = new FormData(form);
  //   let obj = {};
  //   formData.forEach((value, key) => {
  //     obj[key] = value;
  //   });

  //   let json = JSON.stringify(obj);

  //   request.send(json);

  //   request.addEventListener("readystatechange", () => {
  //     if (request.readyState < 4) {
  //       statusMessage.innerHTML = message.loading;
  //     } else if (request.readyState === 4 && request.status === 200) {
  //       statusMessage.innerHTML = message.success;
  //     } else {
  //       statusMessage.innerHTML = message.failure;
  //     }
  //   });

  //   for (let i = 0; i < input.length; i++) {
  //     input[i].value = "";
  //   }
  // });

  // Fetch method

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    form.appendChild(statusMessage);

    let formData = new FormData(form);
    let obj = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });

    fetch("server.php", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then((Response) => {
      if (Response.status === 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });
  });
});
