document.addEventListener("DOMContentLoaded", () => {
  // --- DOM ELEMENT REFERENCES ---
  const taskInput = document.getElementById("task-input");
  const addTaskForm = document.getElementById("add-task-form");
  const taskList = document.getElementById("task-list");
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const dayNameEl = document.getElementById("day-name");
  const dayNumberEl = document.getElementById("day-number");
  const monthNameEl = document.getElementById("month-name");

  // --- STATE MANAGEMENT ---
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [
    { id: 1, text: "study", completed: true },
    { id: 2, text: "read a book", completed: true },
    { id: 3, text: "coding", completed: false },
  ];

  // --- FUNCTIONS ---

  // fx to save tasks to local storage
  const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // fx to render all tasks to the DOM
  const renderTasks = () => {
    // clear the current list
    taskList.innerHTML = "";

    // if there are no tasks, show a message
    if (tasks.length === 0) {
      taskList.innerHTML = `<p class="text-tertiary text-center">No tasks yet. Add one!</p>`;
      updateProgress();
      return;
    }

    // create and append each task item
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.className =
        "flex items-center justify-between bg-primary p-3 rounded-lg mb-2 shadow-sm";
      li.dataset.id = task.id;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "custom-checkbox";
      checkbox.checked = task.completed;

      const taskText = document.createElement("span");
      taskText.textContent = task.text;
      taskText.className = `flex-grow ml-3 font-medium text-tertiary ${
        task.completed ? "completed" : ""
      }`;

      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "&#x2715;"; // A simple 'X'
      deleteButton.className = "text-tertiary hover:text-secondary font-bold";

      li.appendChild(checkbox);
      li.appendChild(taskText);
      li.appendChild(deleteButton);
      taskList.appendChild(li);
    });

    updateProgress();
  };

  // fx to update the pixel art progress bar
  const updateProgress = () => {
    const completedTasks = tasks.filter((task) => task.completed).length;
    const totalTasks = tasks.length;

    // calc progress percentage and convert to blocks
    const progressPercentage =
      totalTasks === 0 ? 0 : completedTasks / totalTasks;
    const blocksToFill = Math.ceil(progressPercentage * 8);

    // get all pixel meter blocks
    const pixelBlocks = document.querySelectorAll(".pixel-meter");

    // reset all blocks first - show all blocks but mark unfilled ones
    pixelBlocks.forEach((block) => {
      block.classList.remove("filling", "filled");
      block.style.opacity = "1"; // Always show all blocks
    });

    // fill blocks based on progress percentage
    for (let i = 0; i < blocksToFill; i++) {
      setTimeout(() => {
        pixelBlocks[i].classList.add("filled");
        setTimeout(() => {
          pixelBlocks[i].classList.add("filling");
        }, 100); // Small delay before filling animation
      }, i * 150); // Stagger each block appearance
    }

    progressText.textContent = `${completedTasks} / ${totalTasks} tasks done`;
  };

  // fx to update the date display
  const updateDate = () => {
    const now = new Date();
    const options = { weekday: "long", month: "long" };
    dayNameEl.textContent = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(now);
    monthNameEl.textContent = new Intl.DateTimeFormat("en-US", {
      month: "long",
    }).format(now);
    dayNumberEl.textContent = now.getDate();
  };

  // --- EVENT LISTENERS ---

  // add a new task
  addTaskForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page refresh
    const text = taskInput.value.trim();
    if (text) {
      const newTask = {
        id: Date.now(), // Simple unique ID
        text: text,
        completed: false,
      };
      tasks.push(newTask);
      taskInput.value = "";
      saveTasks();
      renderTasks();
    }
  });

  // handle clicks for completing or deleting tasks (event delegation)
  taskList.addEventListener("click", (e) => {
    const target = e.target;
    const parentLi = target.closest("li");
    if (!parentLi) return;

    const taskId = Number(parentLi.dataset.id);

    // if checkbox is clicked
    if (target.type === "checkbox") {
      const task = tasks.find((t) => t.id === taskId);
      if (task) {
        task.completed = target.checked;
        saveTasks();
        renderTasks();
      }
    }

    // if delete button is clicked
    if (target.tagName === "BUTTON") {
      tasks = tasks.filter((t) => t.id !== taskId);
      saveTasks();
      renderTasks();
    }
  });

  // --- INITIALIZATION ---
  updateDate();
  renderTasks();
});
