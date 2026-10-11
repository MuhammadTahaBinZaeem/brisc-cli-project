const input = document.getElementById("task");
const list = document.getElementById("taskList");
const counter = document.getElementById("counter");
const button = document.getElementById("addButton");
let taskCount = 0;

button.addEventListener("click", function () {
  const description = input.value.trim();
  if (description === "") {
    alert("Please enter a study task first.");
    return;
  }

  const item = document.createElement("li");
  item.textContent = description;
  list.appendChild(item);
  taskCount++;
  counter.textContent = taskCount + " task(s) added";
  input.value = "";
  input.focus();
});
