function drawDot(x, y, r, result){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const step = 20;

    {   //ctx config for dots
        ctx.fillStyle = (result === "Попал!" && result !== "Not Valid!") ? "green" : "red"
    }

    {   //drawing dot
        ctx.beginPath();
        ctx.arc(canvas.width / 2 + (step * x) * (r / 2), canvas.height / 2 + (step * -y) * (r / 2), 5, 0, 2 * Math.PI, false);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
}

function drawAllDots(){
    const resultTable = document.getElementById("tbody-id");
    const rows = resultTable.querySelectorAll("tr");
    rows.forEach((row) => {
        const cells = row.querySelectorAll("td");
        const x = cells[0].textContent;
        const y = cells[1].textContent;
        const r = cells[2].textContent;
        const result = cells[3].textContent;

        drawDot(x, y, r, result);
    });
}