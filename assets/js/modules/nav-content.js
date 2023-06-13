const navContent = () => {
  // Dynamic content section code
  const toggleElement = (target) => {
    const allSiblinsElem = document.querySelectorAll(".row");
    allSiblinsElem.forEach((elem, index) => {
      if (elem.className.split(" ")[1] === target) {
        elem.classList.remove("content-inactive");
        elem.classList.add("content-active");
      } else {
        elem.classList.remove("content-active");
        elem.classList.add("content-inactive");
      }
    });
  };

  // This function will show the target section & hide all other section
  const toggleNav = (targetNav) => {
    const elemUl = document.querySelector(".nav-list");
    const allUl = elemUl.querySelectorAll("a");
    allUl.forEach((elem, index) => {
      if (elem === targetNav) {
        elem.classList.add("nav-active");
      } else {
        elem.classList.remove("nav-active");
      }
    });
  };

  // This function will highlight the active menu & deactivate all other menu
  const triggerElem = document.querySelectorAll(".nav-item");
  triggerElem.forEach((singleElem, index) => {
    singleElem.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSection = singleElem.className;
      const targetSectionClass = singleElem.getAttribute("data-target");
      toggleElement(targetSectionClass);
      toggleNav(singleElem);
    });
  });
};

export default navContent;
