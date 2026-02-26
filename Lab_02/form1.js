const inputContainer = document.getElementById("name");
const inputValue = inputContainer.value;

const btn = document.getElementById("btn");
btn.addEventListener('click', function(){
    const container = document.getElementById("show");
    const p = document.createElement("p");
    p.innerText = inputValue;
    container.appendChild(p);
})