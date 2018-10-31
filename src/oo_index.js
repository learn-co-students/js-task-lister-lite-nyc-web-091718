
document.addEventListener("DOMContentLoaded", () => {
  console.log('DOM HAS LOADED')

  const newTaskForm = document.getElementById('create-task-form')
  const divForAppendingNewTasks = document.querySelector("#tasks")

    newTaskForm.addEventListener("submit", function(event) {
      event.preventDefault()
      const newTaskInputField = event.target.querySelector("#new-task-description")
      const newTaskString = newTaskInputField.value

  const newTaskLITag = document.createElement("li")
  const deleteTaskButton = document.createElement("BUTTON")

  newTaskLITag.innerText = newTaskString
  deleteTaskButton.innerText = 'x'

  divForAppendingNewTasks.appendChild(newTaskLITag)
  newTaskLITag.appendChild(deleteTaskButton)

  divForAppendingNewTasks.addEventListener('click', function(event) {
    debugger
    event.target.parentElement.remove()
    });


    event.target.reset()
  });
})
