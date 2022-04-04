
function rollEyes (x, y) {
    var balls = document.getElementsByClassName("ball");

    for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transform = "translate(-" + x + ",-" + y + ")";
    }
   
}
