var todos = [];
var completed = [];
var todoList = document.getElementById("todoList");
var completedList = document.getElementById("completedList");
var countElement = document.getElementById("todosCount");
var completedElement = document.getElementById("todosCompleted");

function getTodo() {
  // Get the input
  var newTodo = document.getElementById("todoInput");

  /*
    Add the newTodo to the todos array.
  */
  todos.push(newTodo.value);
  // Reset value to empty the input.
  newTodo.value = "";
  // Call the function to show todos
  showTodos();
}

function showTodos() {

  
var HTML = "";
for(var i=0; i < todos.length; i++){
HTML +=  `<div><input type="checkbox" id="todo${i}" onChange="complete(this.id)"><span className="todo">${
          todos[i]
    }</span></input></div>`;
  }
 
    
    /*
    Use a for loop here to generate the HTML you need to add each todo.
    Here's an idea of the code to use:
      <div>
        <input type="checkbox" id="todo${VARIABLE}" onChange="complete(this.id)" />
        <span className="todo">array[VARIABLE]</span>
      </div>
    Some things to remember:
    1. You'll set the number of times to run based on the length of the array.
    2. You'll get the Todo Text from the index of the todos array.
    3. It's important that the id for the checkbox be unique because we'll use it
    to move the todo to the completed list when it's checked off. In this case,
    you'll want to use the same VARIABLE that you use to start your for loop.

  */

  todoList.innerHTML = HTML;

  /*
    How can you tell how many todos there are?
    You can use "countElement.innerHTML = " to set the number of todos.
  */

  countElement.innerHTML = todos.length,;
}

function complete(todo) {
  // This takes the todo id from the input element and cuts off "todo" so that
  // we're just left with the index of the todo item.
  let index = todo.replace("todo", "");

  /*
    Using the index variable, add that todo to the completed todos array.
  */
completed.push(todos[index]);
  todos.splice(index, 1);
  /*
    After you add the todo to the completed array, you need to remove it from
    the todos array. Hint: you'll probably want to use splice.
  */

  // Now we have to rerun both the todo and the completed lists.
  showTodos();
  showCompleted();
 
}

function showCompleted() {
  var HTML = "";

  for(var g=o; g < completed.length; g++){
 HTML +=  `<div>< class= "far fa-circle"></li> ${completed[g]}</div>`;
  } 

 
  /*
    Just like before with the todo list, use a for loop to generate the HTML for
    the completed todos. Here's an idea for the code:
      <div>array[VARIABLE]</div>
    For "bonus points", try adding a checkmark icon before the todo!
  */

  completedList.innerHTML = HTML;

  /*
    Just like before, count the number of completed tasks there are.
    Use "completedElement.innerHTML = " to set the number of todos.
  */
  completedElement.innerHTML = completed.length;
}
