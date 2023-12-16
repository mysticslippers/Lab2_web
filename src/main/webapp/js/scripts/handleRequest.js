function handleRequest(x, y, r){
    const url = '/Lab2_web/controller?'
    const params = new URLSearchParams();
    params.append("x-input", x);
    params.append("y-input", y);
    params.append("r-input", r);
    window.location = url + params.toString();
}