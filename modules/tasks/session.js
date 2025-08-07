// Store objs in the session
export function storeInSession(obj) {
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