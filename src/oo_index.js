
document.addEventListener("DOMContentLoaded", () => {
  console.log('DOM HAS LOADED')

  document.addEventListener("DOMContentLoaded", () => {
  console.log('DOM HAS LOADED')

  let i = 0

  const taskform = document.getElementById('create-task-form')

  taskform.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log(event.target)
    const userInputField = event.target.querySelector('#new-task-description')
    console.log(userInputField)
    const userInputString = userInputField.value
    console.log(userInputString)

    const todoList = document.getElementById('tasks')
    const listItem = document.createElement('li')
    listItem.innerText = userInputString
    console.log(listItem)
    todoList.appendChild(listItem)
    const deleteButton = document.createElement('button')
    listItem.appendChild(deleteButton)
    deleteButton.innerText = 'delete'
    // deleteButton.id = i
    listItem.id = i

    const deleteitem = function deleteitem() {
        let thisone = this.parentNode.id
        console.log('thisone is:' + thisone)
        let delitem = document.getElementById(thisone)
        console.log('delitem is:' + delitem)
        delitem.parentNode.removeChild(delitem)
    }

    i++
    deleteButton.onclick = deleteitem

  })







})

})
