function handleRequest(x, y, r){
    const xhr = new XMLHttpRequest();
    const url = '/Lab2_web/controller?';
    const params = new URLSearchParams();
    params.append("x-input", x);
    params.append("y-input", y);
    params.append("r-input", r);

    xhr.open("GET", url + params.toString(), true);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if (xhr.status === 200){
                console.log("Запрос успешно обработан!");
                console.log(xhr.responseText);
            }
            else{
                console.log("Запрос обработан некорректно!\n" + xhr.readyState + "\n" + xhr.responseText);
            }
        }
    };
    xhr.send();
}