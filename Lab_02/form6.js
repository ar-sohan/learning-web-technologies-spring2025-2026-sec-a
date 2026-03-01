const btn = document.getElementById("btn");
const msg = document.getElementById("msg6");
const bloodGroupSelect = document.getElementById("bloodGroup");

btn.addEventListener("click", function (event) {
  event.preventDefault();

  const selectedValue = bloodGroupSelect.value;

  if (selectedValue) {
    const idx = bloodGroupSelect.selectedIndex;
    const selectedText = bloodGroupSelect[idx].text;
    msg.className = "successful";
    msg.textContent = `Selected blood group: ${selectedText}`;
  } else {
    msg.className = "failed";
    msg.textContent = "Please select a blood group";
  }
});
