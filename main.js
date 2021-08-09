nose_x=0; nose_y=0;
difference=0;
right_wrist_x=0;
left_wrist_x=0;
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
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        right_wrist_x=results[0].pose.rightWrist.x;
        left_wrist_x=results[0].pose.leftWrist.x;
        difference=floor(left_wrist_x-right_wrist_x)
        console.log(results);
    }
}

function modelLoaded() {
    console.log("poseNet is initalized");
}

function draw() {
    background("black")
    fill("red");
    textSize(difference);
    console.log("Yatharth");
    text("Yatharth",nose_x,nose_y)
}

