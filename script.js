const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const rgbBtn = document.querySelector('#btn-rgb');
const color = document.querySelector('.color');
const hexBtn = document.querySelector('#btn-hex');
rgbBtn.addEventListener('click',function(e){
    let rgb;
    rgb=`rgb(${randomRgbCode()},${randomRgbCode()},${randomRgbCode()})`
    color.textContent= rgb;
    document.body.style.backgroundColor=rgb;
})

function randomRgbCode(){
    return Math.floor(Math.random() * 255)
}
hexBtn.addEventListener('click',function(){
    let hexCode='#'
    for(let i=0;i<6;i++){
        hexCode+=hex[randomHexCode()];
    }
    color.textContent= hexCode;
    document.body.style.backgroundColor=hexCode;
})
function randomHexCode(){
    return Math.floor(Math.random() * hex.length)
}