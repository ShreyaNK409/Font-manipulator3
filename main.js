function setup()
{
 video=createCapture(VIDEO);
 video.size(550,550);
 canvas=createCanvas(500,550);
 canvas.position(1020,100);
 posenet=ml5.poseNet(video,modelLoaded);
 posenet.on("pose",gotPoses);
}

function draw()
{
 background("rgb(252, 179, 170)");
 textSize(difference);
 fill(0,102,153);
text('Shreya',10,30);

}

function modelLoaded()
{
    console.log("model Loaded!!!!");
}

function gotPoses(results)
{

 if (results.length > 0)
 {
    console.log(results);
    rightwristx=results[0].pose.rightWrist.x;
    leftwristx=results[0].pose.leftWrist.x;
    difference = floor(leftwristx - rightwristx);
 }
 
}