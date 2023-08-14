document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with the class "class-to-select"
  const classElements = document.querySelectorAll(".class-to-select");

  // Loop over each element and add a click event listener
  classElements.forEach(function (element) {
    element.addEventListener("click", function () {
      // Display the class name in an alert when clicked
      alert("You clicked on " + element.textContent);
    });
  });

  // Add a click event listener to the button
  const button = document.getElementById("alert-button");
  button.addEventListener("click", function () {
    alert("Button clicked!");
  });
});
