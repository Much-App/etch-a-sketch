

/* colors*/
const COLOR = "hsl(0, 50%, 0%)"
const mode = "default"
/* setting buttons */
const btnBlack = document.querySelector('#black');
const btnRainbow = document.querySelector('#rainbow');
const btnGray = document.querySelector('#gray');
const btnChoose = document.querySelector('#choose');
const btnEraser = document.querySelector('#eraser');
const btnClear = document.querySelector('#clear');
/* slider and container */
const slider = document.querySelector('#slider');
const etchContainer = document.querySelector('#etch');
/* event listeners */
slider.addEventListener("change",changeSize)
btnClear.addEventListener("click",createGrid)


    




/* functions */
function changeSize () {
    createGrid ()
}
function createGrid () {
    emptyGrid ()
    let length = slider.value
    let lengthPixels = 500/length + "px"
    for (let i = 1; i <= length * length; i++){
        const square = document.createElement(`square`)
        square.style.height = lengthPixels  
        square.style.width = lengthPixels
        square.addEventListener("mouseover",hoverColor)
        etchContainer.appendChild(square)
    }
}

function emptyGrid (parent) {
    while (etchContainer.firstChild) {
        etchContainer.firstChild.remove()
    }
}

function hoverColor () {
    this.style.backgroundColor = COLOR
}




createGrid()