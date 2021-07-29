function setup() {
    canvas = createCanvas(550, 500);
    canvas.position(600, 90)
    video = createCapture(VIDEO)
    video.size(550, 500);
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on("pose", gotposes)
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
    }
}

function modelLoaded() {
    console.log("poseNet is initalized");
}

function draw() {
    fill("red");
    textSize(20);
    console.log("Yatharth");
    text("Yatharth",200,200)
}

