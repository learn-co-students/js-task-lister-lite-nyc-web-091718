document.addEventListener('DOMContentLoaded', () => {
  const newTaskInput = document.querySelector('#new-task-description')
  const newTaskForm = document.querySelector('#create-task-form')
  const tasksList = document.querySelector('#tasks')
  console.log(tasksList)

  newTaskForm.addEventListener('submit', function formSubmitHandler(event) {
    event.preventDefault()

    const newCommentInputField = event.target.querySelector('#new-task-description')
    const newTaskString = newCommentInputField.value
    const newTaskLiTag = document.createElement('li')

    newTaskLiTag.innerText = newTaskString
    const appendedLi = tasksList.appendChild(newTaskLiTag)

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'x'

    newTaskLiTag.appendChild(deleteButton)

    deleteButton.addEventListener('click', function () {
      appendedLi.remove()

    })

    event.target.reset()
  })




}) //end of DOMContentLoaded








// document.addEventListener("DOMContentLoaded", () => {
// console.log('DOM HAS LOADED')
//
// const input = document.getElementById('new-task-description')
// const submissionForm = document.getElementById('create-task-form')
// const list = document.getElementById('tasks')
//
// submissionForm.addEventListener('submit', function(event) {
//  event.preventDefault()
//  console.log(event.target)
//
//  const newCommentInputField = event.target.querySelector('#new-task-description')
//  const newTaskString = newCommentInputField.value
//  const newTaskLiTag = document.createElement('li')
//
//  newTaskLiTag.innerText = newTaskString
//
//  list.appendChild(newTaskLiTag)
//
//  event.target.reset()
// })
// })
