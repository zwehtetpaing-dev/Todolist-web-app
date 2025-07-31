function createNewTask() {
    const input = document.getElementById("task-input");

    if (input.value === "") {
        return;
    }

    const div = document.createElement("div");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    const button = document.createElement("button");

    checkbox.type = "checkbox";
    button.textContent = "Delete";
    label.textContent = input.value;

    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(button);

    document.body.appendChild(div);
}