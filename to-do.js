/*this function gets the task from input*/
function get_todos() {
    var todos=new Array; //this creates a new array of tasks (items from user inputs)
    var todos_str = localStorage.getItem ('todo'); //this pulls the task that was saved locally in the web browser memory
    if (todos_str !== null) {//if the input is not null then JSON.parse will communicate with the browser to make the task a Javascript object
        todos = JSON.parse(todos_str);
    }
    return todos;
}

// this function adds the input task to the get_todos function array
function add() {
    var task = document.getElementById('task').value; //these 2 lines take the inputed task and create a variable of it
    var todos = get_todos();
    todos.push(task);//this adds the new task to the END of the array
    localStorage.setItem('todo', JSON.stringify(todos));//this converts the task input to a JSON string
    document.getElementById("task").value = ""; //retrieves the value
    show();//show string?

    return false;
}
//this function keeps the tasks permanently displayed on the scrren
function show() {
    var todos = get_todos(); //this sets the task that was retrieved as a variable
    var html = '<ul>'; // this sets up each task as an unordered list
    for (var i = 0; i < todos.length; i++) {//this displays the task to the list in the order it was inputed
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button><li>';//this also displays the
        //task as a list and creates the button with the "x"

    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html; // this displays the task as a list

}
document.getElementById('add').addEventListener('click', add); // this displays the inputed task when the "add item" is clicked
show(); // this will keep the inputs displayed PERMANENTLY on the screen

//function delete() {
    //var list = document.getElementById("todoList");//get the <ul> element with id="todoList"
    //while (list.hasChildNodes()) { //as long as <ul> has a child note, remove it - this should empty the entire list
    //list.removeChild(list.firstChild);
    //}
  //}
//function removeAll(){
   // document.getElementById("todoList").innerHTML = "";
//}




