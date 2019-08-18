document.getElementById("form-todo")
        .addEventListener("submit", function(e) {
  const task = document.getElementById("input-form-todo").value
  console.log(task)
  e.preventDefault()
  newTask(task)
  tasks.push(task)
  document.getElementById("form-todo").reset()
})

var tasks = [];

function newTask(task)
{
  const lista = document.getElementById("list")
  const create_element = document.createElement("div")
  create_element.innerHTML = "<div id=box>" + task + "<input type=button name=dlt value=Delete>" + "</div>"

  lista.appendChild(create_element);
}

document.getElementById("list").addEventListener("click", function(e) {
  var idk = e.target
  deleter(idk)
})

function deleter (element) {
  if (element.name === "dlt") {
    element.parentElement.remove();
  }
}
