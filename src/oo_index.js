
document.addEventListener("DOMContentLoaded", () => {


 const inputBar = document.getElementById('new-task-description')

 const submit = document.querySelectorAll("#create-task-form input")[1]
 const formButton = document.getElementById('create-task-form')

 //create overlaying select
 const select  = document.createElement('select')
 select.id = "dropdown"
 formButton.insertBefore(select,submit)
 const option1 = document.createElement('option')
 option1.value = 'high'
 option1.innerText = "🔴"
 select.appendChild(option1)
 const option2 = document.createElement('option')
 option2.value = 'low'
 option2.innerText = "🥝"
 select.appendChild(option2)
 const option3 = document.createElement('option')
 option3.value = 'medium'
 option3.innerText = "🌕"
 select.appendChild(option3)
 //------ Create underlying options

 formButton.addEventListener('submit', (function(e){
 e.preventDefault()
 const dropdown = document.getElementById("dropdown")
 const task = inputBar.value
 const tasklist = document.getElementById('tasks')
 const li = document.createElement('li')

  li.innerText = task
   if (dropdown.value === "high"){
      li.style = "color: red;"
   }
   else if (dropdown.value === "medium"){
       li.style = "color: goldenrod;"
   }
   else if (dropdown.value === "low"){
       li.style = "color: green;"
   }

 const appendedli = tasklist.appendChild(li)
 const editButton = document.createElement('button')
 editButton.innerText = "Edit"
  appendedli.appendChild(editButton)

editButton.addEventListener('click', (function(edit){
  edit.preventDefault()
  const editForm = document.createElement("form")
  const editInput = document.createElement("input")
  const submitEdit = document.createElement("input")
  submitEdit.type = "submit"
  submitEdit.value = "edit task"
  editInput.value = appendedli.innerText.slice(0, -5)
  editForm.appendChild(editInput)
  editForm.appendChild(submitEdit)
// appendedli.reset();
const liEdit = appendedli.appendChild(editForm)

liEdit.addEventListener('submit', (function(editE){
  appendedli.innerText = editInput.value
 appendedli.appendChild(editButton)
 appendedli.appendChild(button)
}))
}))

 const button = document.createElement('button')
 button.innerText = 'X'

 appendedli.appendChild(button)
 // console.dir(button)
 button.addEventListener('click', (function(event){
   event.preventDefault()
   appendedli.remove()
 }))
  formButton.reset()
 }));

})
