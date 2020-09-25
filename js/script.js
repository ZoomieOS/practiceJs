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
      if(tabConetent[b].classList.contains('hide')) {
        tabConetent[b].classList.remove("hide");
        tabConetent[b].classList.add("show");
      }
  }

 containerTab.addEventListener('click', function(e) {
    if(e.target && e.target.classList.contains('info-header-tab')) {
        for(let i = 0; i < tabBtn.length; i++) {
            if(e.target === tabBtn[i]) {
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }
    }
 })
});
