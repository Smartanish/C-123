noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;



function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(50, 200);
    // video.hide();

    canvas = createCanvas(500, 370);
    canvas.position(660, 120);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}



function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background(blue);
    fill("blue");


}