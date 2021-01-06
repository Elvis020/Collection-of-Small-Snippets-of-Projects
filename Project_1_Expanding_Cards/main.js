const panels = document.querySelectorAll('.panel');

// Looping through all the panels and listening for the click event.
panels.forEach(panel => {
    panel.addEventListener('click', function(){
        removeActiveClass();
        panel.classList.add("active");
    })
})

const removeActiveClass = () => {
    panels.forEach(p => {
        p.classList.remove("active");
    })
}