const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// String만 포함된 변수는 대문자로  그냥 관례
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// form submit하면 기본적으로 페이지 새로고침함(form의 기본동작 / a = 페이지이동)
// preventDefault = 어느 event 든지 기본 행동들을 발생되지 않도록 막음

// JS는 기본적으로 인자 하나를 보냄.뒤에 어떤 함수가 추가되든. 받고싶으면 event
// 여기서 event는 단순히 변수명. 기본 인자 필요없다면 안쓰면 그만
function OnLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", OnLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
