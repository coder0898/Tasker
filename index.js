const tabsBtn = document.querySelectorAll(".tab-btns .tabs-btn");
const tabsContent = document.querySelectorAll(".container section");

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
