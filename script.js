board = document.querySelector('#board');
board.style.gridTemplateColumns = "repeat(16,1fr)"
board.style.gridTemplateRows = "repeat(16,1fr)"



nodiv = 16*16;
for(i=0;i<nodiv;i++){
    let div = document.createElement('div');
    div.classList.add("box")
    board.insertAdjacentElement('beforeend',div)
}

let box = document.getElementsByClassName("box")
len=box.length
for(let j=0;j<len;j++){
    box[j].addEventListener("mouseover",changeColor);
    function changeColor(){
        box[j].style.backgroundColor = "red" ;
    }
        

 
}







/*
box.addEventListener("click",colorChange);

function colorChange(){
    box.style.backgroundColor = "red";
}
*/

