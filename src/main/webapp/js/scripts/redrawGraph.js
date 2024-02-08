const rInput = document.getElementById("r-input-choice");

rInput.addEventListener('input', function () {
    if(isValidR(rInput)){
        let rNumberValue = rInput.value;
        drawGraph(rNumberValue);
    }
});