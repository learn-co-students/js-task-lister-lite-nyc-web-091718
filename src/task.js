const newTaskForm = document.getElementById("create-task-form");
const taskContainer = document.getElementById("tasks");

newTaskForm.addEventListener("submit", function formSubmitEventHandler(event) {
  console.log("We're in the event handler!")

  event.preventDefault()


  const userInputField = event.target.querySelector("#new-task-description")
  const userInputString = userInputField.value

  const taskLiTag = document.createElement("li")
  taskLiTag.innerText = userInputString;
  const listButtonTag = document.createElement("button")
  listButtonTag.innerText = "X";
  listButtonTag.setAttribute("data-description", userInputString)

  taskContainer.appendChild(taskLiTag);
  taskLiTag.appendChild(listButtonTag);

  // clears the form inputs
  event.target.reset()
  // console.log(event.target)
  // console.log(userInputField.value)
})

taskContainer.addEventListener("click", function(event) {
  // console.log(event)
  // console.log(event.target)
  // console.log(event.target.dataset)
  console.log(taskContainer)
  // grab the button's parent - li
  console.log(event.target.parentNode)
  // grab the button's parent - li's parent - ul
  console.log(event.target.parentNode.parentNode)
  // if button's parent - li exists then li's parent.removeChild(button's parent li)
  if (event.target.parentNode) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  }
  // another way to delete is using event.target.parentElement.remove();

})
