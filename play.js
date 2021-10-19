function play (element) {
    var audio = document.getElementById("audio");
    audio.setAttribute("src", element.dataset.fil);
    audio.style.display="block";
    audio.play();
}