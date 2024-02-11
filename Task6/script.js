let colorGreenChange = document.querySelector('#colorGreen');
let colorYellowChange = document.querySelector('#colorYellow');
let colorRedChange = document.querySelector('#colorRed');
let clickQuantity = 0;
function makeGreen() {
    colorGreenChange.style.background = 'green';
    colorYellowChange.style.background = 'black';
    colorRedChange.style.background = 'black';
    clickQuantity += 1;
}
function makeYellow() {
    colorYellowChange.style.background = 'yellow';
    colorGreenChange.style.background = 'black';
    colorRedChange.style.background = 'black';
    clickQuantity += 1;
}
function makeRed() {
    colorRedChange.style.background = 'red';
    colorGreenChange.style.background = 'black';
    colorYellowChange.style.background = 'black';
    clickQuantity = 0;
}

function getCircle() {
    switch (clickQuantity) {
        case 0: makeGreen();
            break;
        case 1: makeYellow();
            break;
        case 2: makeRed();
            break;
    }
}
colorGreenChange.addEventListener('click', getCircle);
colorYellowChange.addEventListener('click', getCircle);
colorRedChange.addEventListener('click', getCircle);