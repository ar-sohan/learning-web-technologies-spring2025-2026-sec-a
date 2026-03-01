const btn = document.getElementById("btn");
const msg = document.getElementById("msg5");

btn.addEventListener("click", function (event) {
  event.preventDefault();

  const degreeCheckboxes = document.getElementsByName("degree");
  let isSelected = false;
  let selectedDegrees = [];

  for (let i = 0; i < degreeCheckboxes.length; i++) {
    if (degreeCheckboxes[i].checked) {
      isSelected = true;
      selectedDegrees.push(degreeCheckboxes[i].value);
    }
  }

  if (isSelected) {
    msg.className = "successful";
    msg.textContent = `Selected: ${selectedDegrees.join(", ").toUpperCase()}`;
  } else {
    msg.className = "failed";
    msg.textContent = "Please select at least one degree";
  }
});
