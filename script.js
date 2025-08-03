let clickCount = 0;

function createNewTask() {
    const input = document.getElementById("task-input");

    if (input.value === "") {
        return;
    }

    clickCount++;

    const div = document.createElement("div");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    const button = document.createElement("button");

    div.id = `task-${clickCount}`;
    checkbox.type = "checkbox";

    button.textContent = "Delete";
    button.id = `deleteButton-${clickCount}`;
    // Add button onclick function that produce the task number everytime it has been clicked. 
    // Then put the number of the task as argument for deleteTask() function.
    button.addEventListener("click", function() {
        let num = [];
        length = this.id.length
        for (let i = length - 1; i >= 0; i--) {
            if (this.id[i] === "-") {
                break;
            } else {
                num.push(this.id[i]);
            }
        }
        num.reverse();
        let tmpNum = Number(num.join(""));
        deleteTask(tmpNum);
    });

    label.textContent = input.value;

    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(button);
    document.body.appendChild(div);
}


function deleteTask(taskNo) {
    const tag = document.getElementById(`task-${taskNo}`);
    tag.remove();
}