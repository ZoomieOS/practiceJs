let budgetOnTheMonth = +prompt("Ваш бюджет на месяц?"),
    periodMoney = prompt("Введите дату в формате YYYY-MM-DD");

let budgetText = document.querySelector("#budget");

const appData = {
  budgetOnTheMonth,
  timeData: periodMoney,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
  budgetOfTheDay: function (dayOfMonth = 30) {
    this.budgetOnTheMonth > 0
      ? (budgetText.innerHTML = `My budget is: ${this.budgetOnTheMonth / dayOfMonth}`)
      : (budgetText.innerHTML = "Budget NOT found!!!");
  },
  detectLevel: function () {
    if(this.budgetOnTheMonth < 100 ) {
      console.log('Низкий достаток')
    } else if (this.budgetOnTheMonth < 1000) {
      console.log('Средний достаток')
    } else if (this.budgetOnTheMonth < 10000) {
      console.log('Высокий достаток');
    }
  },
  chooseOptExpenses: function() {
    for(let i = 1; i < 4; i++) {
      let opt = prompt('Статья необязательных расходов?');
      this.optionalExpenses[i] = opt;
    }
  }
};

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
    appData.expenses[firstQuestion] = secondQuestion;
  } else {

  }
};


appData.budgetOfTheDay();
appData.detectLevel();
appData.chooseOptExpenses();