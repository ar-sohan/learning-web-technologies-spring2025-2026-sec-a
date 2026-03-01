const btn = document.getElementById("btn");
const msg = document.getElementById("msg4");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

btn.addEventListener("click", function (event) {
  event.preventDefault();

  const day = dayInput.value.trim();
  const month = monthInput.value.trim();
  const year = yearInput.value.trim();

  const validationResult = validateDateOfBirth(day, month, year);

  if (validationResult.flag) {
    msg.className = "successful";
    msg.textContent = "Valid date of birth!";
  } else {
    msg.className = "failed";
    msg.textContent = validationResult.errorText;
  }
});

function validateDateOfBirth(day, month, year) {
  if (day.length === 0) {
    return {
      flag: false,
      errorText: "Day cannot be empty",
    };
  }
  if (month.length === 0) {
    return {
      flag: false,
      errorText: "Month cannot be empty",
    };
  }
  if (year.length === 0) {
    return {
      flag: false,
      errorText: "Year cannot be empty",
    };
  }

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return {
      flag: false,
      errorText: "Please enter valid numbers",
    };
  }

  const dayNum = parseInt(day, 10);
  const monthNum = parseInt(month, 10);
  const yearNum = parseInt(year, 10);

  if (dayNum < 1 || dayNum > 31) {
    return {
      flag: false,
      errorText: "Day must be between 1 and 31",
    };
  }

  if (monthNum < 1 || monthNum > 12) {
    return {
      flag: false,
      errorText: "Month must be between 1 and 12",
    };
  }

  if (yearNum < 1900 || yearNum > 2500) {
    return {
      flag: false,
      errorText: "Year must be between 1900 and 2500",
    };
  }

  const daysInMonth = getDaysInMonth(monthNum, yearNum);
  if (dayNum > daysInMonth) {
    return {
      flag: false,
      errorText: `Month ${monthNum} only has ${daysInMonth} days`,
    };
  }

  return {
    flag: true,
    errorText: null,
  };
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
