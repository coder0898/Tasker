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
