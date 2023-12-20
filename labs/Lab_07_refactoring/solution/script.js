// zad 1
let variableOne = prompt("var one");
let variableTwo = prompt("var two");
function equals(varOne, verTwo) {
  return variableOne == variableTwo
    ? console.log("equals")
    : console.log("not equals");
}
equals(variableOne, variableTwo);

// zad 2
let f = new Array("apple", "strawberry", "blueberry", "raspberry", "lemon");
let Color = new Array("green", "red", "blue", "light red", "yellow");

function test() {
  for (let i = 0; i < f.length; i++) {
    console.log(f[i]);
    for (let j = 0; j < f.length; j++) {
      if (f[i] == f[j]) {
        console.log(f[i] + " " + Color[i]);
      }
    }
  }
}
test();
// zad 3
let salaryValue = (text) => {
  zp = prompt(text, undefined);
  zp = !isNaN(parseFloat(zp)) ? parseFloat(zp) : 0;
  while (zp == 0) {
    zp = prompt(text, undefined);
    zp = !isNaN(parseFloat(zp)) ? parseFloat(zp) : 0;
  }
  return zp;
};
let count = salaryValue("Количество человек");
let salary = salaryValue("Введите зарплату на человека");
alert("Затраты на ЗП " + count * salary);
// zad 4
let students = [
  { FIO: "Петров А.А.", Estimation: 5 },
  { FIO: "Иванов Б.Б.", Estimation: 3.4 },
  { FIO: "Сидоров Г.Г.", Estimation: 9 },
  { FIO: "Немолодой Д.Д", Estimation: 2 },
  { FIO: "Молодой Е.Е", Estimation: 3.4 },
  { FIO: "Молодой Е.Е", Estimation: -8 },
];
// zad5
function studentsAverage() {
  let summ = 0;
  let BadStudents = [];
  let counter = 1;
  for (let i = 0; i < students.length; i++) {
    if (!(students[i].Estimation <= 5 && students[i].Estimation >= 0)) {
      console.log("Такие значения мимо!");
      continue;
    }
    if (students[i].Estimation < 4) {
      BadStudents.push(students[i]);
    }
    summ += students[i].Estimation;
    counter++;
  }
  console.log(summ);
  console.log(students.length);
  console.log("Средняя оценка: " + summ / counter);
  console.log("Плохие студенты.");
  if (BadStudents?.length > 0) {
    BadStudents.forEach((item) => {
      console.log("Фио " + item.FIO);
      console.log("Оценка " + item.Estimation);
    });
  } else {
    console.log("Таких нет");
  }
}
studentsAverage();
