// Make task left on HTML even after reload.
document.addEventListener('DOMContentLoaded', function() {
    let tasks = JSON.parse(sessionStorage.getItem("tasks"));
    if (tasks === null) {
        console.log("hello world");
    }else {
        for (let i = 0; i < tasks.length; i++) {
            container.innerHTML += tasks[i].tags;
        }
    }
});

let taskCounter = 0;
const taskInput = document.getElementById("taskInput");
const createBtn = document.getElementById("createBtn");
const container = document.getElementById("container");

createBtn.addEventListener("click", () => {
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
                    <button id="delBtn${taskCounter}" onclick="deleteTask()">Delete</button>
                </div>
            `
        }
        // Store in session about componenet object
        storeInSession(component);

        // Create new tasks
        createTask();
    }
})

// Store objs in the session
function storeInSession(obj) {
    let tasks = JSON.parse(sessionStorage.getItem("tasks"));
    if (tasks === null) {
        let arr = [];
        arr.push(obj);
        sessionStorage.setItem("tasks", JSON.stringify(arr));
    } else {
        tasks.push(obj);
        sessionStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

// Create new tasks function
function createTask() {
    let tasks = JSON.parse(sessionStorage.getItem("tasks"));
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].added === false) {
            tasks[i].added = true;
            container.innerHTML += tasks[i].tags;
        }
    }
    sessionStorage.setItem("tasks", JSON.stringify(tasks));
}

// Delete task
function deleteTask() {
    const childId = event.target.id;
    const tasks = JSON.parse(sessionStorage.getItem("tasks"));
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].delBtnId === childId) {
            const child = document.getElementById(childId);
            const parent = child.parentElement;
            document.getElementById(parent.id).remove();
            tasks.splice(i, 1);
            sessionStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }

}

function test() {
    let tasks = JSON.parse(sessionStorage.getItem("tasks"));
    console.log(tasks);
}

function clearSession() {
    sessionStorage.clear();
}