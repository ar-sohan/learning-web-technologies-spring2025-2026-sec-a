const move = document.getElementById("mv");
move.addEventListener('click', () => {
    const box = document.getElementById("box");
})
let counter = 0;

let interval  = setInterval(function(){
    if(counter > 10){
        clearInterval(interval);
    }
    else{
        let curr = window.getComputedStyle("box").left;
        if(curr == "")
        {
            curr = "10px";
        }
        else{
            curr = parseInt(curr) + 10 + "px";
        }
        curr.style.left = current;
    }
    
})