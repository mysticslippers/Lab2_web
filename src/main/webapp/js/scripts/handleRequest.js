function sendSyncRequest(x, y, r){
    const url = '/Lab2_web/controller?';
    const params = new URLSearchParams();
    params.append("x-input", x);
    params.append("y-input", y);
    params.append("r-input", r);
    window.location = url + params.toString();
}

function sendAsyncRequest(x, y, r){
    const xhr = new XMLHttpRequest();
    const url = '/Lab2_web/controller?';
    const params = new URLSearchParams();
    params.append("x-input", x);
    params.append("y-input", y);
    params.append("r-input", r);

    xhr.open("GET", url + params.toString(), true);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                console.log("Запрос успешно обработан!");
                console.log(xhr.responseText);
            }
        }
    }
}