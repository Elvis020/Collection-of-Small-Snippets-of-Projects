const boxes = document.querySelectorAll(".box");

// Adding an even listener to check if the user is scrolling.
window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes(){
  // Stating were we want the boxes to come in
  const triggerPoint = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerPoint) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};
