//Sets a variables for the input elements to inser the todo
 const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");

//Sets variable to the actual todolist and its components
const todoList = document.querySelector("#todoList");
const listt = document.querySelector("#todoList li")

//Sets variables to button elements that 
const deleteAllBtn = document.querySelector(".clear ")
const rearrange = document.querySelector(".rearrange")

//Sets variable to the completed element
const Completed = document.querySelector(".completed")



 
// onkeyup event
inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; //Gets the entered value
  if(userEnteredValue.trim() != 0){ //if the user value isn't only spaces
    addBtn.classList.add("active"); //activate the add button
  }else{
    addBtn.classList.remove("active"); //unactivate the add button 
  }
}
 
showTasks(); 
 
addBtn.onclick = ()=>{ //when user click on plus icon button
  let userEnteredValue = inputBox.value; //getting input field value
  let getLocalStorageData = localStorage.getItem("New Todo"); //getting storage
  if(getLocalStorageData == null){ //if localstorage has no data
    listArray = []; //creates a blank array
  }else{
    listArray = JSON.parse(getLocalStorageData);  //transforming js string into a js object
  }
  listArray.push(userEnteredValue); //pushing/adding new value in array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforms th js object into a json string
  showTasks(); //calling showTask function
  addBtn.classList.remove("active"); //unactivate the add button once the task added
}
 

function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo"); // sets variable to the todos
  if(getLocalStorageData == null){ //if there are no todos
    listArray = []; //nothing in array
  }else{
    listArray = JSON.parse(getLocalStorageData); //if there are todos, the list that shows are the entered values
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; //passing the array length in pendingtask

  if(listArray.length > 0){ //if array length is greater than 0
    deleteAllBtn.classList.add("active"); //active the delete button
  }else{
    deleteAllBtn.classList.remove("active"); //unactive the delete button
      };

     if(listArray.length > 1){ //if array length is greater than 0
    rearrange.classList.add("active"); //active the rearrange button
  }else{
    rearrange.classList.remove("active"); //unactive the rearrange button
  };

  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag +=  `<li class = "listt" ondblclick = "changeColorr()" ><label class = "label">${element}</label> 
    <span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span>
    <span class = "edit" onclick = "editTask(${index})"> <i class = "fas fa-edit"></i></span>
</li>`; //creates the todo from a code that formats what all todos will look like
  });
  todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
  inputBox.value = ""; //once task added leave the input field blank
}
 
// delete task function
function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Todo"); //gets todo data
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); //delete or remove the li
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); //call the showTasks function
}
 
// delete all tasks 
deleteAllBtn.onclick = ()=>{
  listArray = []; //empty the array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //set the item in localstorage
  showTasks(); //call the showTasks function
}

var editInput=document.createElement("input");//text
  //button.edit
  var editButton=document.createElement("button");//edit button




var editTask=function(index){
console.log("Edit Task...");

var listItem=this.parentNode; //sets variable to parent node
console.log("Change 'edit' to 'save'");
var label=document.querySelectorAll('label')[index] //calls for all of the elements that are labels
const inputBox = document.querySelector(".inputField input");
console.log("Change 'edit' to 'save'");
var containsClass=todoList.classList.contains("editMode"); //adds the class "editMode" to the todo
console.log("Change 'edit' to 'save'");


    //If class of the parent is .editmode
    if(containsClass){
      console.log("Change 'edit' to 'save'");

    //switch to .editmode
    //label becomes the inputs value.
      console.log("Change 'edit' to 'save'");
             inputBox.value=label.innerText;

    }else{
    

           label.innerText=inputBox.value;
       console.log("Change 'edit' to 'save'");

       console.log("Change 'edit' to 'save'");

    }

    //toggle .editmode on the parent.
    label.classList.toggle("editMode");
     console.log("Change 'edit' to 'save'");

};


  function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("todoList");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("li");
    // Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* If next item is alphabetically lower than current item,
        mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
  }
  
    
  }
}

const list = document.querySelector('#todoList'); //sets a variable to todolist

function changeColorr(evt) {
  const li = evt.target.closest('#todoList > li') //gets the li element frorm the todo list
  
  if (li !== undefined)
    li.style.backgroundColor = '#eaebfe'; //changes background color
}
list.addEventListener('dblclick', changeColorr); //event listener when the li element is double clicked


