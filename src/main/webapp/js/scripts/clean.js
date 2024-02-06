function clean(){
    const resultTable = document.getElementById("tbody-id");
    while(resultTable.firstChild){
        resultTable.removeChild(resultTable.firstChild);
    }
    drawGraph(null);
    sendClearRequest();
}

function sendClearRequest(){
    const url = '/Lab2_web/controller?'
    const params = new URLSearchParams();
    params.append("mode", "Clear data!");
    window.location = url + params.toString();
}