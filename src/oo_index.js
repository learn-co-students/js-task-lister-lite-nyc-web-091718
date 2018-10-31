document.addEventListener("DOMContentLoaded", () => {
 console.log('DOM HAS LOADED')

const input = document.getElementById('new-task-description')
const submissionForm = document.getElementById('create-task-form')
const list = document.getElementById('tasks')
submissionForm.addEventListener('submit', function(event) {
 event.preventDefault()
 console.log(event.target)
 const newCommentInputField = event.target.querySelector('#new-task-description')
 const newTaskString = newCommentInputField.value
 const newTaskLiTag = document.createElement('li')
 newTaskLiTag.innerText = newTaskString
 list.appendChild(newTaskLiTag)
 event.target.reset()
})
})
