// add task function
function addTask() {

    // input value
    const textValue = document.querySelector("#task-value").value;

    if(textValue) {

        // get template
        const getTemplate = document.querySelector(".template");

        // clone template
        const newListItem = getTemplate.cloneNode(true);

        // user input value to list item
        newListItem.textContent = textValue;

        // remove useless classes
        newListItem.classList.remove("hide");
        newListItem.classList.remove("template");

        // get list
        const taskList = document.querySelector("#task-list");

        taskList.appendChild(newListItem);
    }
}

// button
const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e) {

    e.preventDefault();

    addTask();

});