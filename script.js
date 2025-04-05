// A simple to-do list application

// Array to store tasks
let tasks = [];

// Function to add a task
function addTask(task) {
    if (task.trim() === "") {
        console.log("Task cannot be empty.");
        return;
    }
    tasks.push({ task, completed: false });
    console.log(`Task added: "${task}"`);
}

// Function to remove a task by index
function removeTask(index) {
    if (index < 0 || index >= tasks.length) {
        console.log("Invalid task index.");
        return;
    }
    const removedTask = tasks.splice(index, 1);
    console.log(`Task removed: "${removedTask[0].task}"`);
}

// Function to mark a task as completed
function completeTask(index) {
    if (index < 0 || index >= tasks.length) {
        console.log("Invalid task index.");
        return;
    }
    tasks[index].completed = true;
    console.log(`Task completed: "${tasks[index].task}"`);
}

// Function to list all tasks
function listTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
        return;
    }
    console.log("To-Do List:");
    tasks.forEach((task, index) => {
        const status = task.completed ? "[Completed]" : "[Pending]";
        console.log(`${index + 1}. ${task.task} ${status}`);
    });
}

// Select elements
const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add task function
addBtn.addEventListener('click', () => {
    const taskText = input.value.trim();
    if (taskText === '') return; // Do nothing if input is empty

    // Create task item
    const li = document.createElement('li');
    li.className = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.textContent = 'Delete';

    // Append elements to the task item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Append task item to the list
    taskList.appendChild(li);

    // Clear input field
    input.value = '';

    // Add delete functionality
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });
});

// Example usage
addTask("Buy groceries");
addTask("Complete project");
listTasks();
completeTask(0);
listTasks();
removeTask(1);
listTasks();