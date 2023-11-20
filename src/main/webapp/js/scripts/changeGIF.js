function changeGIF(hit){
    const gif = document.getElementById("gif-block-id");
    gif.style.background = hit === "Промах!" ? "url(\"../public/shelby.gif\") no-repeat scroll 8% 40%" : "url(\"../public/another.gif\") no-repeat scroll 8% 40%"
}