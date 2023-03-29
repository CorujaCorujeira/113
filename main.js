function preLload() {
    
}

function setup() {
    canvas=creatCanvas(640,480);
    canvas.position(110,250);
    video=creatCapture(VIDEO);
    video.hide();

    tintColor="";
}

function draw() {
    image(video,0,0,640.480);
    tint(tintColor)
}

function filter_tint() {
    tintColor=document.getElementById("color_name").value;
}

