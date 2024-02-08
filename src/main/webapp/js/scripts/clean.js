function clean(){
    const resultTable = document.getElementById("tbody-id");
    while(resultTable.firstChild){
        resultTable.removeChild(resultTable.firstChild);
    }
    sendClearRequest();
    drawGraph(null);
}

function sendClearRequest(){
    const url = '/Lab2_web/controller?'
    const params = new URLSearchParams();
    params.append("mode", "clean");
    window.location = url + params.toString();
}