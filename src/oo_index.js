
document.addEventListener("DOMContentLoaded", () => {
  console.log('DOM HAS LOADED');

  const tasksForm = document.getElementById('create-task-form');
  const theList = document.getElementById('list');
  const theTasks = document.getElementById('tasks');


  function addToList(){
    //debugger;
    const post = document.getElementById('new-task-description');
    const newPost = post.value;
    const priority = document.getElementById('new-task-priority').value;
    let color;

    if (priority === "3"){
      color = "red";
    }
    if(priority === "2"){
      color = "orange";
    }
    if (priority === "1"){
      color = "green";
    }



    const node = document.createElement("li");
    const text = document.createTextNode(newPost);

    node.appendChild(text);

    const deleteButton = document.createElement("button");
    const buttonText = document.createTextNode('X');

    deleteButton.appendChild(buttonText);

    deleteButton.addEventListener("click", function (){
      this.parentNode.parentNode.removeChild(this.parentNode);
    });

    node.appendChild(deleteButton);

    node.style.color = color;

    node.dataset.priority = priority;


    theTasks.appendChild(node);

    tasksForm.reset();
  }

  tasksForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addToList();
  });


})
