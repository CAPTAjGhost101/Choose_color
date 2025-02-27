document.querySelectorAll(".box div").forEach((box) => {
  box.addEventListener("mouseenter", () => {
    // Play hover sound (pop.mp4)
    let hoverSound = new Audio("./happypop.mp3");
    hoverSound.play();
  });

  box.addEventListener("click", () => {
    // Get the background color of the clicked box
    let newColor = box.style.backgroundColor;

    // Apply the new color to the entire page
    document.body.style.backgroundColor = newColor;

    document.querySelector("h1").style.color = "white";

    // Play click sound (click.mp4)
    let clickSound = new Audio("popin.mp3");
    clickSound.play();
  });
});
