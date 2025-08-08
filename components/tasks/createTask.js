import { storeInSession } from "./session.js";
import { container } from "../components.js";
import { taskInput } from "../components.js";

let taskCounter = 0;

// Create new tasks function
export function createTask() {
    if (taskInput.value === "") {
        return;
    }else {
        taskCounter++;

        // Creating object
        let component = {
            id: taskCounter,
            taskId: `task${taskCounter}`,
            delBtnId: `delBtn${taskCounter}`,
            added: false,
            tags: `
                <div id="task${taskCounter}">
                    <input type="checkbox">
                    <label>${taskInput.value}</label>
                    <button id="delBtn${taskCounter}" class="del">Delete</button>
                </div>
            `
        }
        // Store in session about componenet object
        storeInSession(component);

        // Get array from the session
        let tasks = JSON.parse(sessionStorage.getItem("tasks"));
        // Check each object from the array has "added: false"
        for (let i = 0; i < tasks.length; i++) {
            // If added:false
            if (tasks[i].added === false) {
                tasks[i].added = true;
                container.innerHTML += tasks[i].tags;
            }
        }
        sessionStorage.setItem("tasks", JSON.stringify(tasks));
        taskInput.value = "";
    }
}