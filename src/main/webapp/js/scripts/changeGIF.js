function changeGIF(){
    const gif = document.getElementById("gif-block-id");
    const result = document.getElementById("td-result-id").textContent.trim();
    if(result === "Промах!"){
        gif.style.background = "url(\"../public/shelby.gif\") no-repeat scroll 8% 40%"
    } else {
        gif.style.background = "url(\"../public/another.gif\") no-repeat scroll 8% 40%"
    }
}