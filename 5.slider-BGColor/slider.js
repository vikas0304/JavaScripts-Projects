const body = document.body;
const range = document.getElementById("_range");
const number = document.getElementById('rangeValue');

function updateStyle(){
    const value = Number(number.textContent);

    if(value >= 90){
        applyStyle("#000" , "#40e0d0");
    }else if(value >= 70){
        applyStyle("#333" , "#ff8c00");
    }else if (value >= 25){
        applyStyle("#555" , "#ff8810");
    }else if(value === 0){
        applyStyle("white" , "#333")
    }

}

function applyStyle(color,backgroundColor) {
    number.style.color = color;
    body.style.backgroundColor = backgroundColor;
}

range.addEventListener('input' , function(){
    const sliderValue = Math.min(this.value,100);
    number.textContent = sliderValue;

    updateStyle()
})