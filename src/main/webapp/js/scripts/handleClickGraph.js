const canvas = document.getElementById("canvas");

canvas.addEventListener("mousedown", function (event){
    if(isValidR(rInput)){
        let rValue = (rInput.value)
        const mousePosition = getMousePosition(canvas, event);

        const x = ((mousePosition.xValue - 200) / (20 * rValue / 5)).toFixed(2);
        const y = ((200 - mousePosition.yValue) / (20 * rValue / 5)).toFixed(2);

        sendSyncRequest(x, y, rValue);
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