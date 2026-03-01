const btn = document.getElementById("btn");
const msg = document.getElementById("msg7");
const userIdContainer = document.getElementById("userId");
const pictureContainer = document.getElementById("picture");

btn.addEventListener("click", function (event) {
  event.preventDefault();

  const userId = userIdContainer.value.trim();
  const picture = pictureContainer.files[0];

  const validationResult = validateProfile(userId, picture);

  if (validationResult.flag) {
    msg.className = "successful";
    msg.textContent = "Profile information is valid!";
  } else {
    msg.className = "failed";
    msg.textContent = validationResult.errorText;
  }
});

function validateProfile(userId, pictureFile) {
  if (userId.length === 0) {
    return {
      flag: false,
      errorText: "User ID cannot be empty",
    };
  }

  if (isNaN(userId)) {
    return {
      flag: false,
      errorText: "User ID must be a number",
    };
  }

  //checking if it's positive
  const userIdNum = Number(userId);
  if (userIdNum <= 0) {
    return {
      flag: false,
      errorText: "User ID must be a positive number",
    };
  }

  // Picture cannot be empty
  if (!pictureFile) {
    return {
      flag: false,
      errorText: "Please select a profile picture",
    };
  }

  //adding file type validation
  const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/jpg"];
  if (!allowedTypes.includes(pictureFile.type)) {
    return {
      flag: false,
      errorText: "Please select a valid image file (e.x : JPEG, PNG, or GIF)",
    };
  }

  return {
    flag: true,
    errorText: null,
  };
}
