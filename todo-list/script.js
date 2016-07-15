var form = document.querySelector("#new-item-form");
var todo = document.querySelector("#new-item-input")
var body = document.querySelector("#todo-list");

function formSubmitted(event) {
  event.preventDefault();
  // Your code goes here...
  var newTodo = document.createElement("li");
  var checkbox = document.createElement("input");
  var span = document.createElement("span");
  var label = document.createElement("label");

  span.textContent = todo.value;
  checkbox.setAttribute("type", "checkbox");

  body.appendChild(newTodo);
  body.appendChild(checkbox);
  body.appendChild(span);

  form.reset();
}

form.addEventListener("submit", formSubmitted);
