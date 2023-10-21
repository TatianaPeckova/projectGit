/**
 * Функция-обертка над XMLHttpRequest, осуществляющая запрос
 * url - урл, по которому будет осуществляться запрос
 * callback - функция, которая вызовется при успешном выполнении
 * и первым параметром получит объект-результат запроса
 */
function useRequest(https:jsonplaceholder.typicode.com/photos?_limit=5, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", https:jsonplaceholder.typicode.com/photos?_limit=5, true);

  xhr.onload = function () {

      if (value > 10 || value < 1) {

          const error = document.createElement('div')
          error.innerHTML = 'число вне диапазона от 1 до 10'
          document.body.append(error)
      } else {
          const result = JSON.parse(xhr.response);

        } else {xhr.onload = function () {
              console.log(JSON.parse(xhr.response));
              if (callback) {
                callback(result);
              }
          }
        };

  xhr.send();
}
};
// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector(".j-result");
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector(".j-btn-request");

/**
 * Функция обработки полученного результата
 * apiData - объект с результатом запроса
 */
function displayResult(apiData) {
  let cards = "";
  // console.log('start cards', cards);

  apiData.forEach((item) => {
    const cardBlock = `
    <div class="card">
      <img
        src="${https:jsonplaceholder.typicode.com/photos?_limit=5}"
        class="card-image"
      />
    </div>
  `;
    cards = cards + cardBlock;
  });

  // console.log('end cards', cards);

  resultNode.innerHTML = cards;
}

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener("click", () => {
  useRequest(https:jsonplaceholder.typicode.com/photos?_limit=5, displayResult);
});
