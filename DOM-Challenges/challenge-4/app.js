const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const completedTasksOutput = document.getElementById("completedTasks");
const totalTasksOutput = document.getElementById("totalTasks");

const tasks = [];
const completedTask = [];

function createTaskList() {
  const li = document.createElement("li");
  li.classList.add("task-item");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("complete-checkbox");
  toggleCheckBox(checkBox, li);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-button");
  deleteBtn.innerText = "Delete";
  deleteTask(deleteBtn, li);

  const span = document.createElement("span");
  span.classList.add("task-text");
  span.innerText = taskInput.value;

  li.appendChild(checkBox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}

taskInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    const task = createTaskList();
    tasks.push(task);
    taskInput.value = "";
    removeTask();
    disPlayTask(tasks);
    showTotalTaskNumber(tasks);
  }
});

addButton.addEventListener("click", () => {
  const task = createTaskList();
  tasks.push(task);
  taskInput.value = "";
  removeTask();
  disPlayTask(tasks);
  showTotalTaskNumber(tasks);
});

function disPlayTask(tasks) {
  if (tasks.length == 0) {
    taskList.innerHTML =
      '<li class="empty-list">No tasks yet. Add one above!</li>';
  }
  tasks.forEach((task) => {
    taskList.appendChild(task);
  });
}

function removeTask() {
  taskList.innerHTML = "";
}

function showCompletedTaskNumber(completedTask) {
  completedTasksOutput.innerText = `Completed: ${completedTask.length}`;
}

function showTotalTaskNumber(tasks) {
  totalTasksOutput.innerText = `Total tasks: ${tasks.length}`;
}

function toggleCheckBox(checkBox, li) {
  checkBox.addEventListener("click", () => {
    if (!li.classList.toString().includes("completed")) {
      completedTask.push(li);
      li.classList.add("completed");
      showCompletedTaskNumber(completedTask);
    } else {
      completedTask.pop();
      li.classList.remove("completed");
      showCompletedTaskNumber(completedTask);
    }
  });
}

function deleteTask(deleteBtn, li) {
  deleteBtn.addEventListener("click", () => {
    if (tasks.includes(li)) {
      if (li.classList.toString().includes("completed")) {
        completedTask.pop();
        showCompletedTaskNumber(completedTask);
      }
      const index = tasks.indexOf(li);
      tasks.splice(index, 1);
    }
    removeTask();
    disPlayTask(tasks);
    showTotalTaskNumber(tasks);
  });
}
