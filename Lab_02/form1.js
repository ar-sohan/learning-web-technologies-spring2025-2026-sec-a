const msg = document.getElementById("msg1");
const btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();

  const validated = (name) => {
    // checking the length
    if (name.length === 0) {
      return {
        flag: false,
        errorText: "Name cannot be an empty string",
      };
    }
    // checking the first character
    const firstLetter = name[0];
    const checkLetter = validLetter(firstLetter);
    if (checkLetter === false) {
      return {
        flag: false,
        errorText: "Name must start with a letter",
      };
    }
    // contains at least two words
    const word = name.split(" ");
    if (word.length < 2) {
      return {
        flag: false,
        errorText: "Name must contain two words",
      };
    }
    // contains valid characters only
    for (let i = 0; i < name.length; i++) {
      const char = name[i];

      if (char === " ") {
        continue;
      }
      if (isValidCharacter(char) === false) {
        return {
          flag: false,
          errorText: "Name only contains letters, dots (.), and dashes (-)",
        };
      }
    }
    // otherwise
    return {
      flag: true,
      errorText: null,
    };
  };

  const validation = validated(name);
  if (validation.flag === true) {
    msg.className = "successful";
    msg.textContent = "Name validation Successful!";
  } else {
    msg.className = "failed";
    msg.textContent = validation.errorText;
  }
});

function validLetter(firstLetter) {
  const asciCode = firstLetter.charCodeAt(0);
  if (
    (asciCode >= 65 && asciCode <= 90) ||
    (asciCode >= 97 && asciCode <= 122)
  ) {
    return true;
  } else {
    return false;
  }
}

function isValidCharacter(char) {
  const asciCode = char.charCodeAt(0);

  if (
    (asciCode >= 65 && asciCode <= 90) ||
    (asciCode >= 97 && asciCode <= 122)
  ) {
    return true;
  }

  if (char === ".") {
    return true;
  }

  if (char === "-") {
    return true;
  }

  return false;
}
