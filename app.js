let budgetOnTheMonth,
  periodMoney,
  budgetText = document.querySelector("#budget");

(function () {
  (budgetOnTheMonth = +prompt("Ваш бюджет на месяц?")),
    (periodMoney = prompt("Введите дату в формате YYYY-MM-DD"));

  while (
    isNaN(budgetOnTheMonth) ||
    budgetOnTheMonth == "" ||
    budgetOnTheMonth == null
  ) {
    budgetOnTheMonth = +prompt("Ваш бюджет на месяц?");
  }
})();

const appData = {
  budgetOnTheMonth,
  timeData: periodMoney,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
  budgetOfTheDay: function (dayOfMonth = 30) {
    this.budgetOnTheMonth > 0
      ? (budgetText.innerHTML = `My budget is: ${(
          this.budgetOnTheMonth / dayOfMonth
        ).toFixed()}`)
      : (budgetText.innerHTML = "Budget NOT found!!!");
  },
  detectLevel: function () {
    if (this.budgetOnTheMonth < 100) {
      console.log("Низкий достаток");
    } else if (this.budgetOnTheMonth < 1000) {
      console.log("Средний достаток");
    } else if (this.budgetOnTheMonth < 10000) {
      console.log("Высокий достаток");
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i < 4; i++) {
      let opt = prompt("Статья необязательных расходов?");
      this.optionalExpenses[i] = opt;
    }
  },
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let firstQuestion = prompt(
          "Введите обязательную статью расходов в этом месяце"
        ),
        secondQuestion = prompt("Во сколько обойдется?");

      if (
        typeof firstQuestion === "string" &&
        typeof firstQuestion != null &&
        typeof secondQuestion &&
        firstQuestion != "" &&
        secondQuestion != "" &&
        firstQuestion.length < 50
      ) {
        appData.expenses[i] = secondQuestion;
      } else {
      }
    }
  },
  checkSavings: function () {
    if (this.savings === true) {
      let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");
      this.monthIncome = (save / 100 / 12) * percent;
      alert(`Доход в месяц от вашего депозита:${this.monthIncome}`);
    } else {
      console.log('Вы ничего не сохранили!');
    }
  },
};

appData.budgetOfTheDay();
appData.chooseExpenses();
appData.detectLevel();
appData.chooseOptExpenses();
appData.checkSavings();