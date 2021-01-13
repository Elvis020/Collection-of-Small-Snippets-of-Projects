const labels = document.querySelectorAll(".form-control label");

labels.forEach((l) => {
  l.innerHTML = l.innerText
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms" >${letter}</span>`
    )
    .join("");
});