import { createTask } from "./components/tasks/createTask.js";
import { deleteTask } from "./components/tasks/deleteTask.js";
import { container } from "./components/components.js";

// Make task left on HTML even after reload.
document.addEventListener('DOMContentLoaded', function() {
    // Get array from the session
    let tasks = JSON.parse(sessionStorage.getItem("tasks"));
    // If there is no task in the session
    if (tasks === null) {
        console.log("hello world");
    }
    // If there is a task
    else {
        // Check data from the session's array and show it in the div with class name "container";
        for (let i = 0; i < tasks.length; i++) {
            container.innerHTML += tasks[i].tags;
        }
    }
});

// Buttons
document.addEventListener('click', function(event) {
    // Create Task
    if (event.target.classList.contains("createBtn")) {
        createTask();
    }
    // Delete Task
    else if (event.target.classList.contains("del")) {
        deleteTask();
    }
    // To check the session
    else if (event.target.classList.contains("checkSession")) {
        let tasks = JSON.parse(sessionStorage.getItem("tasks"));
        console.log(tasks);
    }
    // To clear the session
    else if (event.target.classList.contains("clearSession")) {
        sessionStorage.clear();
    }
});