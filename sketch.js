var canvas;
var music;
var box1,box2,box3,box4;
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    edges = createEdgeSprites();
    //create 4 different surfaces
    box1 = createSprite(125,500, 100,50)
    box1.shapeColor = "blue";
    box2 = createSprite(300,500, 100,50)
    box2.shapeColor = "red";
    box3 = createSprite(475,500, 100,50)
    box3.shapeColor = "green";
    box4 = createSprite(650,500, 100,50)
    box4.shapeColor = "yellow";
    ball = createSprite(400,100,20,20);
    ball.velocityX = -5;
    ball.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites(edges);
    ball.bounceOff(edges);
    //add condition to check if box touching surface and make it box
    if(ball.isTouching(box1)){
        ball.shapeColor = box1.shapeColor;
    }
    else if(ball.isTouching(box2)){
        ball.shapeColor = box2.shapeColor;
    }
    else if(ball.isTouching(box3)){
        ball.shapeColor = box3.shapeColor;
    }
    else if(ball.isTouching(box4)){
        ball.shapeColor = box4.shapeColor;
    }
    else {
        ball.shapeColor = "orange";
    }

    drawSprites();
}