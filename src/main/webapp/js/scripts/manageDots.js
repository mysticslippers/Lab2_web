window.addEventListener("load", handleGraph);

function handleGraph(){
    const resultTable = document.getElementById("tbody-id");
    const rows = resultTable.querySelectorAll("tr");

    rows.forEach((row) => {
        const cells = row.querySelectorAll("td");
        const x = cells[0].textContent.trim();
        const y = cells[1].textContent.trim();
        const r = cells[2].textContent.trim();
        const result = cells[3].textContent.trim();

        drawDot(x, y, r, result);
    });
}