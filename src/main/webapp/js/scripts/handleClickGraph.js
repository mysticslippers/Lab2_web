const canvas = document.getElementById("canvas");
const rInput = document.getElementById("r-input-choice");

canvas.addEventListener("mousedown", function (event){
    if(isValidR(rInput)){
        let rValue = (rInput.value).toFixed(2);
        const mousePosition = getMousePosition(canvas, event);

        const x = (mousePosition.xValue - 200) / (40 * rValue / 5);
        const y = (200 - mousePosition.yValue) / (40 * rValue / 5);

        console.log(x, y);
    }
});

function getMousePosition(canvas, event){
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = (event.clientX - rect.left) * scaleX;
    const y = (event.clientY - rect.top) * scaleY;

    return {xValue: x, yValue: y};
}