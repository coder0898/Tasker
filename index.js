// tabs
const tabsBtn = document.querySelectorAll(".tab-btns .tabs-btn");
const tabsContent = document.querySelectorAll(".container section");

// modal
const modalContainer = document.getElementById("modal-container");
const addTaskBtn = document.getElementById("addTask-btn");
const closedBtn = document.getElementById("close-btn");

// modal form
const taskName = document.getElementById("task-name");
const descriptionText = document.getElementById("description-text");
const taskDate = document.getElementById("task-date");
const taskAssign = document.getElementById("task-assign");
const resetBtn = document.getElementById("reset-btn");
const submitBtn = document.getElementById("submit-btn");

// switching tabs functionality
tabsBtn.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabsContent.forEach((content) => {
      content.classList.remove("active");
    });
    tabsBtn.forEach((tab) => {
      tab.classList.remove("active-btn");
    });
    tabsContent[index].classList.add("active");
    tabsBtn[index].classList.add("active-btn");
  });
});

// model functionality

addTaskBtn.addEventListener("click", () => {
  modalContainer.style.display = "table";
});

// 2.When the user clicks on <span> (x), close the modal
closedBtn.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

// 3.When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
  if (event.target == modalContainer) {
    modalContainer.style.display = "none";
  }
});

// modal form functionality
let formData;
function FormValidation() {
  let taskTitle = taskName.value,
    taskDesc = descriptionText.value,
    dateOfTask = taskDate.value,
    assignTo = taskAssign.value;

  if (taskTitle == "" || taskDesc == "" || !dateOfTask || assignTo == "") {
    alert("Please enter valid details...");
  } else {
    formData = {
      title: taskTitle,
      desc: taskDesc,
      endDate: dateOfTask,
      assign: assignTo,
    };
    console.log(formData);
  }
}

submitBtn.addEventListener("click", () => {
  FormValidation();
});

resetBtn.addEventListener("click", () => {
  taskName.value = "";
  descriptionText.value = "";
  taskDate.value = "";
  taskAssign.value = "";
});
