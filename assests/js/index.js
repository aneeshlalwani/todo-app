const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector(".list-container"); // Use querySelector to select a single element

function addTask() {
    if (inputBox.value === '') {
        alert("Empty Task cannot be added!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); // Append the li element to the selected list container
        
        // Adding a cross icon
        let span =document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

// click function for check and uncheck of task
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

// function for saving task data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTaskList(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTaskList()