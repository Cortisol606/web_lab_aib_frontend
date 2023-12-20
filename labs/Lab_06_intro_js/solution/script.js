// ZADANIE 1

const apple = 10;
alert(apple);
console.log(apple);

const condition = "Text";
console.log("Good game is " + condition);

// ZADANIE 2
const someInt = 100,
  someString = "100",
  someBool = true;
console.log(someInt + someString);
console.log(someInt + someBool);
console.log(someString + someInt);
console.log(someString + someBool);
console.log(someBool + someInt);
console.log(someBool + someString);

// ZADANIE 3
let arr = [];
const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
for (let i = 0; i < 10; i++) {
  arr.push(rand(-100, 100));
}
console.log(arr);
console.log(arr.filter((item) => item > 0));

// ZADANIE 4
function randNewFunc(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
number = 3;
const ArrExpNumber = (array, number) => {
  return array.map((item) => item * number);
};
const randNew = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
console.log("Число:  " + randNew(-10, 10));
console.log("Число Func:  " + randNewFunc(-10, 10));
console.log("Arr * Num: " + ArrExpNumber(arr, number));

// Object
const NullObject = {
  firstName: "firstName",
  surname: "surname",
  patronymic: "patronymic",
  birthday: "09.09.2009",
  hobby: "hobby",
  group: "group",
  method: function () {
    return (
      this.firstName +
      " " +
      this.surname +
      " " +
      this.patronymic +
      "\n" +
      this.birthday +
      "\n" +
      this.hobby +
      "\n" +
      this.group
    );
  },
};
alert(NullObject.method());

const FamSalary = {
  Fio1: 1212,
  Fio2: 675,
  Fio3: 1212,
  Fio4: 57,
  Fio5: 1352,
  Fio6: 1964,
  Fio7: 8452,
  Fio8: 463,
  Fio9: 1212,
  Fio10: 735,
};
console.log(FamSalary);
let allSalary = 0;
for (let key in FamSalary) {
  allSalary += FamSalary[key];
}
console.log("Сумма ЗП: " + allSalary);
