const Tasks = document.getElementById('inputlist'); 
const Sub = document.getElementById('click');
const disArea = document.getElementById('Output');

// Add task function
function addTask(event) {
    event.preventDefault();

    const TaskText = Tasks.value.trim();

    if (TaskText !== "") {

        // create list item
        const item = document.createElement('li');
        item.textContent = TaskText;

        // mark as done
        item.onclick = function () {
            item.style.textDecoration = "line-through";
        };

        // delete button
        const delBtn = document.createElement('button');
        delBtn.textContent = "X";
        delBtn.style.marginLeft = "10px";

        delBtn.onclick = function (e) {
            e.stopPropagation(); // prevent strike when deleting
            item.remove();
        };

        item.appendChild(delBtn);
        disArea.appendChild(item);

        // clear input
        Tasks.value = "";

    } else {
        alert("Please enter a task!");
    }
}

// button click
Sub.addEventListener('click', addTask);

// enter key support
Tasks.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        Sub.click();
    }
});
