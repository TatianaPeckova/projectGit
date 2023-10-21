//Задание 1.Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

/*const parser = new DOMParser();
const xmlString = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
console.log(xmlDOM);

const nodeList = xmlDOM.querySelectorAll("student");
const arrayList = [...nodeList];
const parsedStudents = arrayList.map((student) => {
  const name = student.querySelector("name");
  const firstName = name.querySelector("first");
  const secondName = name.querySelector("second");
  const lang = name.getAttribute("lang");
  const age = student.querySelector("age");
  const prof = student.querySelector("prof");
  return {
    name: firstName.innerHTML + " " + secondName.innerHTML,
    age: age.innerHTML,
    prof: prof.innerHTML,
    lang,
  };
});

console.log(parsedStudents);*/

//Задание 2.Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

/*const jsonString = `{
  "list": [
    {
     "name": "Petr",
      "age": "20",
     "prof": "mechanic"
    },
    {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
    }
  ]
}`;

const parsedJson = JSON.parse(jsonString);
console.log(parsedJson);*/

//Задание 3 Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число.
/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>
<body>
<input type="text" />
<button>click</button>
<p></p>
<div class="result"></div>
<script>
    let a = document.querySelector("input");
    let btn = document.querySelector("button");
    let p = document.querySelector("p");
    let result = document.querySelector(".result");


    function zaproz(link) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", link);
            xhr.onload = () => resolve(xhr.responseText);
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });
    }


    btn.addEventListener("click", function () {
        if (Number(a.value) >= 1 && Number(a.value) <= 10) {
            let link = https://jsonplaceholder.typicode.com/photos?_limit=${Number(a.value)};
            zaproz(link)
                .then((response) => {
                    const img = JSON.parse(response);
                    result.innerHTML = ''
                    img.forEach((image) => {
                        const kar = document.createElement("img");
                        kar.src = image.url;
                        result.appendChild(kar);
                    });
                })
                .catch((error) => console.error(error));
        } else {
            p.innerHTML = "число не  в диапазоне";
        }
    });
</script>
</body>
</html>*/
//Задание 4 Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.

/*const button = document.querySelector('#button');
const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    withCredentials: false,
    crossorigin: true,
    mode: 'no-cors',
}
button.addEventListener('click', async () => {
    const input1 = document.querySelector('#input1');
    const input2 = document.querySelector('#input2');
    const value1 = input1.value
    const value2 = input2.value

    if (!Number.isNaN(value1) && !Number.isNaN(value2) && value1 > 100 && value1 < 300 && value2 < 300 && value2> 100) {
        // валидация пройдена
        // const responseJson = await fetch(https://dummyimage.com/${value1}x${value2})
        const src = https://dummyimage.com/${value1}x${value2}
        let resultHTML = 
            <img src=${src}" />
        ;
        const res = document.createElement('div')
            res.innerHTML = resultHTML
        document.body.append(res)

    } else {
        const error = document.createElement('div')
        error.innerHTML = 'одно из чисел вне диапазона от 100 до 300'
        document.body.append(error)
    }
})*/

//Задание 5. Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

/*<script defer>
        const button = document.querySelector('#button');

        //вспомогательная функция
        const checkValidData = (number) => {
            if (Number.isNaN(number)  number < 1  number > 10) {
                return false
            }

            return true
        };
        //вспомогательная функция

        const setToHtml = (html) => {
            const output = document.createElement('div')
            output.innerHTML = html;
            document.body.append(output);
        }
        //вспомогательная функция

        const formatOutput = (data) => {
            let resultHTML = 
              <img src=${data.thumbnailUrl} alt="${data.title}" />
              <p>${data.title}</p>
            ;
            return resultHTML;
        }

        button.addEventListener('click', async () => {
            const pageInput = document.querySelector('#page');
            const limitInput = document.querySelector('#limit');

            const page = pageInput.value;
            const limit = limitInput.value;

            //проверяем инпуты на валидность
            const isValidPage = checkValidData(page);
            const isValidLimit = checkValidData(limit);

            if (!isValidPage && !isValidLimit) {
                setToHtml('Номер страницы и лимит вне диапазона от 1 до 10')
                return;
            }

            if (!isValidPage) {
                setToHtml('Номер страницы вне диапазона от 1 до 10')
                return;
            }

            if (!isValidLimit) {
                setToHtml('Лимит вне диапазона от 1 до 10')
                return;
            }


            const resultJson = await fetch(https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit})
            const result = await resultJson.json();
            console.log(result)
            result.forEach(item => {
                setToHtml(formatOutput(item))
            })
            }

            )
    </script>*/

/*let strArr = [
  "Alice and Bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];

function getSum(str) {
  return str.reduce((acc, el) => {
    const length = el.split(" ").length;
    return length > acc ? length : acc;
  }, 0);
}
console.log(getSum(strArr));*/

/*function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
alert(pow(2, 3));*/
/*
function pow(x, n) {
  if (n == 1) {
   return x * pow(x, n - 1);
  }


alert(pow(2, 3));*/

function prosecution() {
  whoAmI = "The Prosecutor"; //2
  prosecutorName = "Adam"; //4

  console.log("Who am I: " + whoAmI);

  callWitness();
}

function callWitness() {
  whoAmI = "The Witness"; //3

  console.log("Who am I: " + whoAmI);
  console.log("The prosecutor's name: " + prosecutorName);
  console.log("The judge's name: " + judgeName);
}

console.log("All rise"); //1

judgeName = "Emma"; //4
whoAmI = "The judge";

prosecution();
