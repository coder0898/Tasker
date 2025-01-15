// tabs
const tabsBtn = document.querySelectorAll(".tab-btns .tabs-btn");
const tabsContent = document.querySelectorAll(".container section");

// modal
const modalContainer = document.getElementById("modal-container");
const addTaskBtn = document.getElementById("addTask-btn");
const closedBtn = document.getElementById("close-btn");

// modal form
const taskName = document.getElementById("task-title");
const descriptionText = document.getElementById("description-text");
const taskDate = document.getElementById("end-date");
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

// modal functionality
addTaskBtn.addEventListener("click", () => {
  modalContainer.removeAttribute("class");
  modalContainer.classList.add("two");
  document.querySelector("body").classList.add("modal-active");
});

closedBtn.addEventListener("click", () => {
  modalContainer.classList.add("out");
  document.querySelector("body").classList.remove("modal-active");
});

// modal form functionality
let formData = {
  title: "",
  desc: "",
  assignee: "",
  enddate: "",
};

let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

function formDataSubmit() {
  let titleName = taskName.value;
  let descs = descriptionText.value;
  let endDate = taskDate.value;
  let assignees = taskAssign.value;

  formData = {
    title: titleName,
    desc: descs,
    assignee: assignees,
    enddate: endDate,
  };

  // console.log(formData);
  taskList.push(formData);
  // console.log(taskList);

  localStorage.setItem("taskList", JSON.stringify(taskList));
  resetForm();
}

function resetForm() {
  taskName.value = "";
  descriptionText.value = "";
  taskDate.value = "";
  taskAssign.value = "";
}

submitBtn.addEventListener("click", () => {
  formDataSubmit();
  modalContainer.classList.add("out");
  document.querySelector("body").classList.remove("modal-active");
});

resetBtn.addEventListener("click", () => {
  resetForm();
});
