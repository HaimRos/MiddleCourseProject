function changeBgHoverOn(id){
    document.getElementById(id).src = "images/read_more_blue.png";
}

function changeBgHoverOff(id){
    document.getElementById(id).src = "images/read_more_white.png";
}

function changeBgHoverOffYellow(id){
    document.getElementById(id).src = "images/read_more_yellow.png";
}




var images = [], x = -1;
images[0] = "images/250X110668568400.jpg";
images[1] = "images/banner_atar.jpg";
images[2] = "images/paz_250x110059890678.jpg";
images[3] = "images/paz_250x110103131473.jpg";
var t=0;

function changeImage() {
    
    x = (x === images.length - 1) ? 0 : x + 1;
    if (t>0){
    document.getElementById("img-left").src = images[x];
    t=t-1;
    } else{
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img-right").src = images[x];
    t+=1;}
}


function startTimer() {
    setInterval(changeImage, 2000);
}

