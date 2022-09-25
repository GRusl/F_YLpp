function background(e)
{
    let x = (window.innerWidth - e.pageX) / 10;

    document.getElementById("start-block").style.backgroundPositionX = x + "px";
}


document.getElementById("start-block").addEventListener("mousemove", background);