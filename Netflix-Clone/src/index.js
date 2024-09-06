const accordianTitles = document.querySelectorAll(".FAQ__title");

accordianTitles.forEach((title) => {
  title.addEventListener("click", function () {
    const icon = this.querySelector(".fa-plus, .fa-times");
    
    if (icon) {
      icon.classList.toggle("fa-plus");
      icon.classList.toggle("fa-times");
    }

    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
