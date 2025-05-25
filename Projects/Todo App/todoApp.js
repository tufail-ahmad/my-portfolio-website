let todoArr = localStorage.getItem("todoList");
let todoList = JSON.parse(todoArr) || [];

displayItems();

function addTodo() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
  let todoInput = document.querySelector(".todo-input");
  let dateInput = document.querySelector(".date-input");
  todoList.push({ item: todoInput.value, dueDate: dateInput.value });
  todoInput.value = "";
  dateInput.value = "";
  displayItems();
}
function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class="delete-btn" onClick="todoList.splice(${i}, 1);
      displayItems();">Delete</button>
    `;
  }
  localStorage.setItem("todoList", JSON.stringify(todoList));
  containerElement.innerHTML = newHtml;
}

/*====================== Dark Mode Functionality ====================*/
let darkTheme = localStorage.getItem("darkTheme");
const toggleBtn = document.querySelector("#toggle-btn");

const enabledarkTheme = () => {
  document.body.classList.add("darkTheme");
  localStorage.setItem("darkTheme", "active");
};

const disabledarkTheme = () => {
  document.body.classList.remove("darkTheme");
  localStorage.setItem("darkTheme", null);
};

if (darkTheme == "active") enabledarkTheme();

toggleBtn.addEventListener("click", () => {
  darkTheme = localStorage.getItem("darkTheme");
  darkTheme !== "active" ? enabledarkTheme() : disabledarkTheme();
});
