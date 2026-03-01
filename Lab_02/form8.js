const form = document.getElementById("profileForm");
const message = document.getElementById("message");

//all input elements
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const genderRadios = document.getElementsByName("gender");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const bloodGroupSelect = document.getElementById("bloodGroup");
const degreeCheckboxes = document.getElementsByName("degree");
const pictureInput = document.getElementById("picture");
const resetBtn = document.getElementById("resetBtn");

//error text containers
const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");
const msg3 = document.getElementById("msg3");
const msg4 = document.getElementById("msg4");
const msg5 = document.getElementById("msg5");
const msg6 = document.getElementById("msg6");
const msg7 = document.getElementById("msg7");

// Reset button
resetBtn.addEventListener("click", function () {
  msg1.innerHTML = "";
  msg2.innerHTML = "";
  msg3.innerHTML = "";
  msg4.innerHTML = "";
  msg5.innerHTML = "";
  msg6.innerHTML = "";
  msg7.innerHTML = "";
  message.innerHTML = "";
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  clearAllErrors();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const day = dayInput.value.trim();
  const month = monthInput.value.trim();
  const year = yearInput.value.trim();
  const bloodGroup = bloodGroupSelect.value;
  const picture = pictureInput.files[0];

  let flag = true;

  const nameValidation = validateName(name);
  if (!nameValidation.flag) {
    flag = false;
    msg1.innerHTML = nameValidation.error;
  }

  const emailValidation = validateEmail(email);
  if (!emailValidation.flag) {
    flag = false;
    msg2.innerHTML = emailValidation.error;
  }

  const genderValidation = validateGender();
  if (!genderValidation.flag) {
    flag = false;
    msg3.innerHTML = genderValidation.error;
  }

  const dobValidation = validateDateOfBirth(day, month, year);
  if (!dobValidation.flag) {
    flag = false;
    msg4.innerHTML = dobValidation.error;
  }

  if (!bloodGroup) {
    flag = false;
    msg5.innerHTML = "Please select a blood group";
  }

  const degreeValidation = validateDegree();
  if (!degreeValidation.flag) {
    flag = false;
    msg6.innerHTML = degreeValidation.error;
  }

  const photoValidation = validatePhoto(picture);
  if (!photoValidation.flag) {
    flag = false;
    msg7.innerHTML = photoValidation.error;
  }

  if (flag) {
    message.innerHTML = "All profile information is valid!";
  } else {
    message.innerHTML = "Please fix the errors above";
  }
});

function clearAllErrors() {
  msg1.innerHTML = "";
  msg2.innerHTML = "";
  msg3.innerHTML = "";
  msg4.innerHTML = "";
  msg5.innerHTML = "";
  msg6.innerHTML = "";
  msg7.innerHTML = "";
}

// Form 1: Name validation
function validateName(name) {
  if (name.length === 0) {
    return { flag: false, error: "Name cannot be empty" };
  }

  const words = name.split(" ").filter((word) => word.length > 0);
  if (words.length < 2) {
    return { flag: false, error: "Name must contain at least two words" };
  }

  const firstChar = name[0];
  if (!isLetter(firstChar)) {
    return { 
      flag: false, 
      error: "Name must start with a letter" 
    };
  }

  for (let i = 0; i < name.length; i++) {
    const char = name[i];
    if (char === " ") continue;
    if (!isLetter(char) && char !== "." && char !== "-") {
      return {
        flag: false,
        error: "Name can only contain letters, dots (.), and dashes (-)",
      };
    }
  }

  return { 
    flag: true 
  };
}

// Form 2: Email validation
function validateEmail(email) {
  if (email.length === 0) {
    return { flag: false, error: "Email cannot be empty" };
  }

  if (!email.includes("@")) {
    return { flag: false, error: "Email must contain @ symbol" };
  }

  const parts = email.split("@");
  if (parts.length !== 2) {
    return { flag: false, error: "Email must contain exactly one @ symbol" };
  }

  const localPart = parts[0];
  const domainPart = parts[1];

  if (localPart.length === 0) {
    return { flag: false, error: "Email must have text before @" };
  }

  if (domainPart.length === 0) {
    return { flag: false, error: "Email must have text after @" };
  }

  if (!domainPart.includes(".")) {
    return {
      flag: false,
      error: "Domain must contain a dot (e.g., example.com)",
    };
  }

  if (domainPart.startsWith(".") || domainPart.endsWith(".")) {
    return { flag: false, error: "Domain cannot start or end with a dot" };
  }

  const domainParts = domainPart.split(".");
  for (let i = 0; i < domainParts.length; i++) {
    if (domainParts[i].length === 0) {
      return { flag: false, error: "Invalid domain format" };
    }
  }

  return { flag: true };
}

// Form 3: Gender validation
function validateGender() {
  for (let i = 0; i < genderRadios.length; i++) {
    if (genderRadios[i].checked) {
      return { flag: true };
    }
  }
  return { 
    flag: false, 
    error: "Please select a gender" 
  };
}

// Form 4: Date of Birth validation
function validateDateOfBirth(day, month, year) {
  if (day.length === 0) {
    return {
      flag: false,
      error: "Day cannot be empty",
    };
  }
  if (month.length === 0) {
    return {
      flag: false,
      error: "Month cannot be empty",
    };
  }
  if (year.length === 0) {
    return {
      flag: false,
      error: "Year cannot be empty",
    };
  }

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return {
      flag: false,
      error: "Please enter valid numbers",
    };
  }

  const dayNum = parseInt(day, 10);
  const monthNum = parseInt(month, 10);
  const yearNum = parseInt(year, 10);

  if (dayNum < 1 || dayNum > 31) {
    return {
      flag: false,
      error: "Day must be between 1 and 31",
    };
  }

  if (monthNum < 1 || monthNum > 12) {
    return {
      flag: false,
      error: "Month must be between 1 and 12",
    };
  }

  if (yearNum < 1900 || yearNum > 2016) {
    return {
      flag: false,
      error: "Year must be between 1900 and 2016",
    };
  }

  const daysInMonth = getDaysInMonth(monthNum, yearNum);
  if (dayNum > daysInMonth) {
    return {
      flag: false,
      error: `Month ${monthNum} only has ${daysInMonth} days`,
    };
  }

  return { flag: true };
}

// Form 5: Degree validation
function validateDegree() {
  for (let i = 0; i < degreeCheckboxes.length; i++) {
    if (degreeCheckboxes[i].checked) {
      return { flag: true };
    }
  }
  return { flag: false, error: "Please select at least one degree" };
}

// Form 7: Photo validation
function validatePhoto(pictureFile) {
  if (!pictureFile) {
    return { flag: false, error: "Please select a profile picture" };
  }

  const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/jpg"];
  if (!allowedTypes.includes(pictureFile.type)) {
    return {
      flag: false,
      error: "Please select an image file (JPEG, PNG, or GIF)",
    };
  }

  return { flag: true };
}

function isLetter(char) {
  const code = char.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

function getDaysInMonth(month, year) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }
  if ([4, 6, 9, 11].includes(month)) {
    return 30;
  }
  return 31;
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}