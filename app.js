const cards = document.querySelectorAll(".card");

// For each card get the corresponding button and description
cards.forEach((card) => {
  const button = card.querySelector(".btn");
  const description = card.querySelector(".description");

  //   Whenever a button is clicked show/hide the description
  button.addEventListener("click", () => {
    // get values of CSS properties with getComputedStyle method (otherwise css should be inline in html)
    let display = getComputedStyle(description).display;
    if (display != "none") {
      description.style.display = "none";
    } else {
      description.style.display = "block";
    }
  });
});
