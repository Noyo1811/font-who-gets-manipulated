noseX=0;
noseY=0;
RightWristX=0;
LeftWristX=0;
difference=0;

function setup(){
    video = createCapture(VIDEO);
video.size(550,500);

canvas= createCanvas(550,550);
canvas.position(560,100);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses)
}
function modelLoaded(){
    console.log("PoseNet Is Intialized !!");

}
function draw(){
    background("#F2B5D4")
    fill("cornflowerblue");
    textSize(difference);
    fill("coral")
    text("Circuit",noseX,noseY)
    document.getElementById("r1").innerHTML="Size of text-"+difference+"px";
}
function gotPoses(results){
    if(results.length > 0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log(noseX,noseY);

RightWristX=results[0].pose.rightWrist.x;
LeftWristX=results[0].pose.leftWrist.y;
difference= floor(LeftWristX-RightWristX);
console.log(RightWristX,LeftWristX,difference);


    }

}

