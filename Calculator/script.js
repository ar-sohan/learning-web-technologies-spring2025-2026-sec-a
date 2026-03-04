const btnContainer = document.getElementById("btns_container");

const btn6 = document.createElement("p");
btn6.innerHTML = "AC";
btn6.classList.add("btnStyle");
btn6.addEventListener("click", () => {});
btnContainer.appendChild(btn6);

for (let i = 0; i < 10; i++) {
  const btn = document.createElement("p");
  btn.innerText = `${i}`;
  btn.classList.add("btnStyle");
  btnContainer.appendChild(btn);

  btn.addEventListener("click", () => {
    displayResult(`${i}`);
  });
}

const btn1 = document.createElement("p");
btn1.innerHTML = "+";
btn1.classList.add("btnStyle");
btn1.addEventListener("click", () => {
    displayResult("+")
});
btnContainer.appendChild(btn1);

const btn2 = document.createElement("p");
btn2.innerHTML = "-";
btn2.classList.add("btnStyle");
btn2.addEventListener("click", () => {
    displayResult("-")
});
btnContainer.appendChild(btn2);

const btn3 = document.createElement("p");
btn3.innerHTML = "*";
btn3.classList.add("btnStyle");
btn3.addEventListener("click", () => {
    displayResult("*")
});
btnContainer.appendChild(btn3);

const btn4 = document.createElement("p");
btn4.innerHTML = "/";
btn4.classList.add("btnStyle");
btn4.addEventListener("click", () => {
    displayResult("/")
});
btnContainer.appendChild(btn4);

const btn5 = document.createElement("p");
btn5.innerHTML = "=";
btn5.classList.add("btnStyle");
btn5.addEventListener("click", () => {});
btnContainer.appendChild(btn5);

function displayResult(value) {
  const displayContainer = document.getElementById("display");
  const display = document.createElement("span");
  let firstNum = 0; 
  let opt ='';
  let secondNum = 0;
  if(value != '+' || value != '-' || value != '*' || value != '/'){
    firstNum += parseInt(value);
  }
  else if(value === '+' || value === '-' || value === '*' || value === '/')
  {
    opt = value;
  }
  else{
    secondNum += parseInt(value);
  }

  let result = 0;
  if(opt == "+"){
    result = firstNum + secondNum;
  }
  else if(opt == "-"){
    result = firstNum - secondNum;
  }
  else if(opt == "*"){
    result = firstNum * secondNum;
  }
  else if(opt == "/"){
    result = firstNum / secondNum;
  }
  display.innerHTML = (firstNum == NaN) ? opt : firstNum;
  display.style.textAlign = "center";
  displayContainer.appendChild(display);
}
