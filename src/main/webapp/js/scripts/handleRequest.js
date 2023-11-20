function handleRequest(x, y, r){
    const xhr = new XMLHttpRequest();
    const params = new URLSearchParams();
    params.append("x-input", x);
    params.append("y-input", y);
    params.append("r-input", r);
    const url = '/controller?';

    xhr.open("GET", url + params.toString(), true);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if (xhr.status === 200){
                console.log("Запрос успешно обработан!");
                const data = Object.values(JSON.parse(xhr.responseText));
                if(data[3] === "Ошибка!"){
                    console.log("Произошла ошибка при вводе данных!");
                } else{
                    changeGIF(data[3]);
                    addResultToTable(data);
                }
            }
            else{
                console.log("Запрос обработан некорректно!\n" + xhr.readyState + "\n" + xhr.responseText);
            }
        }
    };
    xhr.send(null);
}