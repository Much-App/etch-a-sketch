

/* default colors/mode*/
let hue = 0
let saturation = 50
let light = 0
let COLOR = `hsl(0, 50%, 0%)`;
let mode = "black"

const btnBlack = document.querySelector('#black');
const btnRainbow = document.querySelector('#rainbow');
const btnGray = document.querySelector('#gray');
const btnEraser = document.querySelector('#eraser');
const btnClear = document.querySelector('#clear');

btnBlack.addEventListener("click",setMode)
btnRainbow.addEventListener("click",setMode)
btnGray.addEventListener("click",setMode)
btnEraser.addEventListener("click",setMode) 
btnClear.addEventListener("click",createGrid) 


const slider = document.querySelector('#slider');
const etchContainer = document.querySelector('#etch');
slider.addEventListener("change",changeSize)



function setMode(){
    mode = this.id
    console.log (mode)
    if (mode === "black") {
        saturation = 50;
        light = 0;
        console.log('black');
    } else if (mode === "rainbow") {
        hue = 0;
        saturation = 50;
        light = 50;
        console.log('rainbow')
    } else if (mode === "gray") {
        hue = 0;
        saturation = 0;
        light = 50;
        console.log('gray');
    } else if (mode === "eraser") {
        light = 100;
        console.log('eraser')
    }
}


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
    updateColor()
    this.style.backgroundColor = COLOR
    hue += 10
    
}

function updateColor () {
    return COLOR = `hsl(${hue}, ${saturation}%, ${light}%)`
}


createGrid()