export function deleteTask() {
    // When this function trigger it will store the current id to the variable.
    const childId = event.target.id;
    // Taking an array from the session
    const tasks = JSON.parse(sessionStorage.getItem("tasks"));
    for (let i = 0; i < tasks.length; i++) {
        // If current id variable and delBtnId varaible from array of the session
        if (tasks[i].delBtnId === childId) {
            // To get to the parent and got parent's id
            const child = document.getElementById(childId);
            const parent = child.parentElement;
            document.getElementById(parent.id).remove();
            // Remove based on position
            tasks.splice(i, 1);
            // Update session
            sessionStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }
}