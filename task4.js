//1.
//let arr = [1, 2, 3, 4, 5, "one", "two", "three", 6, 7, 8, 9, 0];
//console.log(arr);
//let sumOfEvenNumbers = [];
//let sumOfOddNumbers = [];
//let sumOfStrings = [];
//let valueOfNull = [];
//for (let i = 0; i <= arr.length; i++) {
// if (arr[i] % 2 == 0) {
// let a = sumOfEvenNumbers.push(arr[i]);
// console.log(a);
// } else if (arr[i] % 2 !== 0 && arr[i] !== "string") {
//  sumOfOddNumbers.push(arr[i]);
//} else if (arr[i] == " ") {
// sumOfStrings.push(arr[i]);
// } else if (arr[i] == 0) {
//  valueOfNull.push(arr[i]);
//}
//}
//console.log(`Number of even numbers is equal to: ${sumOfEvenNumbers.length}`);
//console.log(`Number of odd numbers is equal to: ${sumOfOddNumbers.length}`);
//console.log(`Number of  strings is equal to: ${sumOfStrings.length}`);
//console.log(`Number of  null number is equal to: ${valueOfNull.length}`);
//let arr = [1, 2, 3, 4, 5, "one", "two", "three", 6, 7, 8, 9, 0];
//let countOfEvenNumbers = [];
//let countOfOddNumbers = [];
//let countOfString = [];
//let countOfNull = [];
//arr.forEach((num) => {
//if (num % 2 == 0 && num !== 0) {
//countOfEvenNumbers.push(num);
//} else if (num % 2 !== 0 && typeof num !== "string") {
//countOfOddNumbers.push(num);
//} else if (typeof num === "string") {
//countOfString.push(num);
//} else if (num == false) {
// countOfNull.push(num);
//}
//});

//console.log(`The number of even numbers is:${countOfEvenNumbers.length}`);
//console.log(countOfOddNumbers.length);
//console.log(countOfString.length);
//console.log(countOfNull.length);

//2.

//function defineTheNumber() {
//let num = Number(prompt("Enter any number that is smaller than 1000: "));
//if (num > 1000) {
//alert(`The data is not correct`);
//} else if (num % 2 !== 0 && num % 3 !== 0 && num % 4 !== 0) {
//alert(`The ${num} number is simple`);
//} else {
//alert(`The ${num} number is composite`);
//}
//return num;
//}

//defineTheNumber();

//Задание 2.

//Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

//{
//"list": [
//{
//"name": "Petr",
//"age": "20",
//"prof": "mechanic"
//},
//{
//"name": "Vova",
//"age": "60",
//"prof": "pilot"
//}
//]
//}
//Sum;
//function getSum(...rest) {
//let result = rest.reduce(
//(acc, i) => (isNaN(i) ? acc : (acc += Number(i))),
//0
//);
//return result;
//}

//console.log(getSum(1, "1", 2, 3, 4, 5, "string"));

//Реализуйте функцию merge, которая будет принимать неограниченное количество объектов в качестве аргументов и возвращать новый объект

//function merge(...rest) {
// let result = Object.assign({}, ...rest);
//return result;
//}
//console.log(
//merge(
//   { name: "John", age: 22 },
//  { surname: "Klein", age: 20, profession: "student" },
//  { profession: "frontend developer", country: "USA" }
// )
//);

//Реализуйте функцию getLanguegesStatistic, которая поможет IT журналу подвести итоги 2019 года

/*const data = [
{
 firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
    year: 2019,
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
    year: 2019,
  },
  {
    firstName: "Piter",
    lastName: "G.",
    country: "Sweden",
    continent: "Europe",
    age: 30,
    language: "JavaScript",
    year: 2019,
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
    year: 2014,
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
    year: 2016,
  },
];

function getLanguegesStatistic(value) {
  let result = Object.fromEntries([...value]);
  console.log(result);
}

getLanguegesStatistic(data);
*/

/*дана строка 'uirihfijfdikcopdjfoirejfroijgtrigjiojtrgtr'
нужно написать функцию, которая вернет объект, в котором ключи - это буквы, значения - кол-во этой буквы в строке
типо 
getCountLetter('asass') // { a: 2, s: 3 }*/

//function getCountLetter(string) {
//let count = 0;
//let result = string.split("").reduce(function(acc, item){
//return acc;
//, {});}
//}

//getCountLetter("uirihfijfdikcopdjfoirejfroijgtrigjiojtrgtr");

//есть массив пользователей, который приходит с бэка (после fetch)

//необходимо из этого массива получить массив с ролями. Две роли: STUDENT, MENTOR. Если у юзера есть массив студентов, то он MENTOR
//function getNewArray(value) {
//let result = value;
//return result;
//console.log(result);
//}
//getNewArray(users)

//const users = [
//{
//username: "Irina",
//id: "1234",
//},
//{
//username: "Anton",
//id: "5343",
//students: ["1234", "6565"], //mentor
//},
//{
//username: "Malbert",
//id: "6565",
//},
//{
//username: "Nikolay",
//id: "2454",
//students: ["6565", "2454"], //mentor
//},
//{
//username: "1232",
//id: "1232",
//},
//{
//username: "IGOR",
//id: "1239",
//students: [], //mentor
//},
//];

//console.log(getNewArray(users));

//function countLetters(str) {
//let letters = {};
//for (let i = 0; i < str.length; i++) {
//let letter = str[i];

//if (letters[letter]) {
// console.log(letters);
// letters[letter]++;
// } else {
// letters[letter] = 1;
//}
//console.log(letters, letter, letters[letter]);
//}
//return letters;
//}
//console.log(countLetters("Tatiana"));
//countLetters("Tatiana");

//Has Arrays

/*function hasArrays(array) {
  for (let i = 0; i <= array.length; i++) {
    if (Array.isArray(array[i])) {
      return true;
    }
  }
  return false;
}

const data1 = [false, true, [1, 2], {}, [], 1, 0, NaN];
const data2 = [false, true, {}, 1, 0, NaN];
console.log(hasArrays(data1));*/

/*const data1 = [false, true, [1, 2], {}, [], 1, 0, NaN];
const data2 = [false, true, {}, 1, 0, NaN];
const hasArrays = (array) => array.some(Array.isArray);

console.log(hasArrays(data2));*/

//const data = [1, 2, 3, 4, 5, 6];

//function getNumbersByParity(arr, str) {
//let result = arr.reduce(function (acc, el) {
// if (el == "even") {
//  acc += arr.filter(function (el) {
// let even = el % 2;
// return even === 0;
//});
//}
//return acc;
// }, []);
// return result;
//}
//console.log(getNumbersByParity(data, "even"));

/*const data = [1, 2, 3, 4, 5, 6];

function getNumbersByParity(arr, str) {
  if (str == "even") {
    let evenNum = arr.filter(function (n) {
      return n % 2 === 0;
    });
    return evenNum;
  } else if (str == "odd") {
    let oddNum = arr.filter(function (n) {
      return n % 2 !== 0;
    });
    return oddNum;
  }
}

console.log(getNumbersByParity(data, "even"));*/

/*const data = [1, 2, 3, 4, 5, 6];

function getNumbersByParity(arr,str){
  str == "even"?arr.filter((n)=>{n%2===0})
  str == "odd"? arr.filter((n)=>{n%2!==0})
}
*/
/*const data = [1, 2, 3, 4, 5, 6];

function getNumbersByParity(arr, str) {
str == "even"? arr.filter((n) => {
      return n % 2 === 0;
      
    }):str == "odd"?arr.filter((n) => {
      return n % 2 !== 0;
    })
    
  }*/
//const data = [1, 2, 3, 4, 5, 6];
//console.log(getNumbersByParity(data, "odd"));

//function getNumbersByParity(arr, str) {
//return str == "even"
//  ? arr.filter((n) => n % 2 === 0)
//  : str == "odd"
//  ? arr.filter((n) => n % 2 !== 0)
//  : arr;
//}
//const data = [1, 2, 3, 4, 5, 6];
//function getNumbersByParity(arr, str) {
//return arr.filter(
//(n) => (str === "even" && n % 2 === 0) || (str === "odd" && n % 2 !== 0)
//);
//}
//console.log(getNumbersByParity(data, "odd"));

/*let randomObj = {
  a: 1,
  b: 2,
  c: 3,
};

function getInvertObj(obj) {
  let newObj = Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
  return newObj;
}

console.log(getInvertObj(randomObj));*/

/*let randomObj = {
  a: 1,
  b: 2,
  c: 3,
};

function getInvertObj(obj) {
  const entries = Object.entries(obj);
  const newEntries = Object.fromEntries(
    entries.reduce((acc, el) => {
      acc += el.reverse();
      return acc;
    }, [])
  );
  return newEntries;
}

console.log(getInvertObj(randomObj));*/

/*const obj = { name: 123 };
const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];
console.log(data);

function getArraysCounts(arr) {
  return Object.fromEntries(arr);
}

console.log(getArraysCounts(data));*/

//const data = [1, 1, 1, 2, 2, 2, 2, true, true, { name: 123 }];

//const getArraysCounts = (arr) => {
//let map = new Map();
//arr.forEach((item) => {
//if (map.has(item)) {
//map.set(item, map.get(item) + 1);
//} else {
// map.set(item, 1);
//}
//});
//return map;
//};
//console.log(getArraysCounts(data));
/*const data1 = [1, 2, 3, 3, 4, 4];
const obj = { name: "John" };
const data2 = [obj, obj, obj, { name: "John" }];
function Unique(array) {
  const set = Array.from(new Set(array));

  return set;
}
console.log(Unique(data2));*/

/*const newStr = "start learning js js";

function Unique(str) {
  let strToArr = str.split(" ");
  const set = Array.from(new Set(strToArr)).join(" *** ");
  return set;
}
console.log(Unique(newStr)); */

/*function retailPrice(price, markup) {
  let finalPrice = (markup * price) / 100 + price;
  return `Initial price: $${price}, markup: ${markup}%, final price: $${finalPrice.toFixed(
    2
  )}`;
}
console.log(retailPrice(20, 100));*/

/*function getSalary(hourRate, dayHours) {
  const mySalary = hourRate * dayHours;
  if (dayHours > 8) {
    return "Too much work for today!";
  }
  return mySalary;
}

console.log(getSalary(500, 8));*/

/*function describesNumners(number) {
  if (number === 0) {
    return "Zero";
  } else if (number < 0 && number % 2 == 0) {
    return "Even negative number";
  } else if (number > 0 && number % 2 == 0) {
    return "Even positive number";
  } else if (number < 0 && number % 2 !== 0) {
    return "Odd negative number";
  } else if (number > 0 && number % 2 !== 0) {
    return "Odd positive number";
  }
}

console.log(describesNumners(5));*/

/*let str = "let`s take leetCode contest";
let newStr = "s`tel ekat edoCteel tsetnoc"
let arr = str
  .split(" ").forEach(function (item) {
    item.reverse();
  });

//let newArr = arr.forEach((elem) => {
//return elem.reverse();
//});

console.log(arr);*/

/*function getIndex(arr) {
  if (arr.length == 0) {
    return "no negative numbers";
  }
  if (Array.isArray(arr)) {
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] < 0) {
        return [i];
      }
    }
    return "no negative numbers";
  }
}

const data1 = [1, 2, 3, 3, -4, 4];
console.log(getIndex(data1));*/

/*function getSumOfFlatware(spoon) {
  const fork = spoon * 2;
  const tableware = fork + spoon;

  const set = new Set();
  set.add(
    `There are ${spoon} amount of spoons and ${fork} amount of forks so the sum of tableware is ${tableware}  `
  );

  return set;
}

console.log(getSumOfFlatware(5));*/

/*function getSumOfFlatware(spoon) {
  const newObj = {};
  const fork = spoon * 2;
  newObj.fork = fork;
  newObj.tableware = fork + spoon;
  newObj.spoon = spoon;
  return newObj;
}

console.log(getSumOfFlatware(5));*/

/*function getSumOfFlatware(spoon) {
  const fork = spoon * 2;
  return {
    fork,
    tableware: fork + spoon,
    spoon,
  };
}

console.log(getSumOfFlatware(5));*/

//console.log(1 && 2 && 3);
//DOM
//создать div
const div = document.createElement("div");
//добавить к нему класс wrapper
div.classList.add("wrapper");
//поместить его внутрь тэга body
const body = document.body;
body.appendChild(div);

//создать заголовок H1 "DOM (Document Object Model)"
const header = document.createElement("h1");
header.textContent = "DOM (Document Object Model)";

//добавить H1 перед Div c классом wrapper
div.insertAdjacentElement("beforebegin", header);
//создать список <ul></ul>
//добавить в него 3 элемента с текстом "один, два, три"
const ul = `<ul>
<li>один</li>
<li>два</li>
<li>три</li>
</ul>`;
//поместить список внутрь элемента с классом wrapper
div.innerHTML = ul;

//создать изображение
const img = document.createElement("img");

//добавить следующие свойства к изображению
//1. добавить атрибут source
img.src = "https://api.lorem.space/image/movie?w=150&h=220";
//2. добавить атрибут width со значением 240
img.width = 240;
//3. добавить класс super
img.classList.add("super");
//4. добавить свойство alt co значением "Super Man"
img.alt = "Super Man";
//Поместить изображение внутрь элемента с классом wrapper
div.appendChild(img);
//Используя HTML строку, создать DIV с классом "pDiv" + с 2 мя параграфами
const elemHTML = `<div class = "pDiv">
<p>параграф 1</p>
<p>параграф 2</p>
</div>`;
//Поместить этот DIV до элемента <ul></ul>
const ullist = div.querySelector("ul");
ullist.insertAdjacentHTML("beforebegin", elemHTML);
//Добавить для 2 го параграфа класс text
const pDiv = document.querySelector(".pDiv");
pDiv.children[1].classList.add("text");

//удалить 1 параграф
pDiv.firstElementChild.remove();
//создать функцию generateAutoCard
//которая принимает 3 аргумента: brand, color,year
const generateAutoCard = (brand, color, year) => {
  const curDate = new Date();
  const curYear = curDate.getFullYear();
  return `
  <div class = "autoCard">
  <h2>${brand.toUpperCase()} ${year}</h2>
  <p>Автомобиль ${brand.toUpperCase()} - ${year} года. Возраст авто - ${
    curYear - year
  } лет.</p>
  <p>Цвет: ${color}</p>
  <button type ="button" class = "btn">Удалить</button> 
  </div>
  `;
};
//создать новый DIV с классом autos
const carsDiv = document.createElement("div");
carsDiv.classList.add("autos");

//создать 3 карточки авто, используя  функцию generateAutoCard
const carsList = [
  { brand: "Tesla", year: 2015, color: "red" },
  { brand: "Lexus", year: 2016, color: "silver" },
  { brand: "Nissan", year: 2012, color: "black" },
];

const carsHTML = carsList
  .map((car) => {
    return generateAutoCard(car.brand, car.color, car.year);
  })
  .join(" ");
//Поместить эти 3 карточки внутрь DIV с классом autos
carsDiv.innerHTML = carsHTML;

//Поместить DIV с классом autos на страницу DOM - до DIV с классом wrapper
div.insertAdjacentElement("beforebegin", carsDiv);
//Добавить кнопку Удалить на каждую карточку авто

//При клике на кнопку удалять карточку из структуры DOM
//1.Выбрать все кнопки
const buttons = document.querySelectorAll(".btn");

//2.Создать функцию удаления
function handleClick(e) {
  const currentButton = e.currentTarget;
  currentButton.closest(".autoCard").remove();
  //console.log(currentButton.parentElement);
}
//3.Использовать цикл - чтобы повесить обработчик события на каждую кнопку
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
