let budgetOnTheMonth = +prompt("Ваш бюджет на месяц?"),
  periodMoney = prompt("Введите дату в формате YYYY-MM-DD"),
  firstQuestion = prompt("Введите обязательную статью расходов в этом месяце"),
  secondQuestion = prompt("Во сколько обойдется?");

let budgetText = document.querySelector("#budget");

const appData = {
  budgetOnTheMonth,
  timeData: periodMoney,
  expenses: {
    firstQuestion: secondQuestion,
  },
  optionalExpenses: {},
  income: [],
  savings: false,
  budgetOfTheDay: function () {
    this.budgetOnTheMonth > 0
      ? (budgetText.innerHTML = `My budget is: ${this.budgetOnTheMonth / 30}`)
      : (budgetText.innerHTML = "Budget NOT found!!!");
  },
};

appData.budgetOfTheDay();