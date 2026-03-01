const btn = document.getElementById("btn");
const msg2 = document.getElementById("msg2");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();

  const validationResult = validateEmail(email);

  if (validationResult.flag) {
    msg2.className = "successful";
    msg2.textContent = "Email is valid!";
  } else {
    msg2.className = "failed";
    msg2.textContent = validationResult.errorText;
  }
});

function validateEmail(email) {
  if (email.length === 0) {
    return {
      flag: false,
      errorText: "Email cannot be empty",
    };
  }

  if (!email.includes("@")) {
    return {
      flag: false,
      errorText: "Email must contain @ symbol",
    };
  }

  const parts = email.split("@");

  if (parts.length !== 2) {
    return {
      flag: false,
      errorText: "Email must contain exactly one @ symbol",
    };
  }

  const localPart = parts[0];
  const domainPart = parts[1];

  if (localPart.length === 0) {
    return {
      flag: false,
      errorText: "Email must have text before @",
    };
  }

  if (domainPart.length === 0) {
    return {
      flag: false,
      errorText: "Email must have text after @",
    };
  }

  if (!domainPart.includes(".")) {
    return {
      flag: false,
      errorText: "Domain must contain a dot",
    };
  }

  if (domainPart.startsWith(".") || domainPart.endsWith(".")) {
    return {
      flag: false,
      errorText: "Domain cannot start or end with a dot",
    };
  }

  const domainParts = domainPart.split(".");
  for (let i = 0; i < domainParts.length; i++) {
    if (domainParts[i].length === 0) {
      return {
        flag: false,
        errorText: "Invalid domain format",
      };
    }
  }

  return {
    flag: true,
    errorText: null,
  };
}
