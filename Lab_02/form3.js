const btn = document.getElementById("btn");
const msg = document.getElementById("msg3");

btn.addEventListener("click", function (event) {
  event.preventDefault();

  const genders = document.getElementsByName("gender");
  let isSelected = false;

  for (let i = 0; i < genders.length; i++) {
    if (genders[i].checked) {
      isSelected = true;
      break;
    }
  }

  if (isSelected) {
    msg.className = "successful";
    msg.textContent = "Gender selected successfully!";
  } else {
    msg.className = "failed";
    msg.textContent = "Please select a gender option";
  }
});
