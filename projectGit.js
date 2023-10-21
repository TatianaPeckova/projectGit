async function getUsers() {
  let response = await fetch(
    "https://api.github.com/repositories/1300192/issues?per_page=1&page=2"
  );
  let content = await response.json();
  console.log(content);
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", getUsers);
