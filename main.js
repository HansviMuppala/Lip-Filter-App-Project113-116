noseX = 0
noseY = 0

function preload(){
    lip_filter = loadImage("https://th.bing.com/th/id/R.1c15f03b70953e6f79f22a6fcfda36bc?rik=C%2fldfEA3DlNolw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fred-lip-png--3000.png&ehk=Q8kkBcx65Ku5nxoQfpDqzXqbYe3Rfh3cCIwM8Yi%2fOcE%3d&risl=&pid=ImgRaw&r=0")
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(lip_filter, noseX, noseY, 70, 30);
}

function take_snapshot(){
    save('LipFilterImg.png');
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function gotPoses(results){
    if(results.length > 0){

        console.log(results);
        noseX = results[0].pose.nose.x-40;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
    