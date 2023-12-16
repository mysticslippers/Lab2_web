function addResultToTable(result){
    const tbody = document.getElementById("tbody-id");
    let resultRow = document.createElement("tr");
    resultRow.innerHTML = result.replace(/^<tr>|<\/tr>$/g, '');
    tbody.appendChild(resultRow);
}