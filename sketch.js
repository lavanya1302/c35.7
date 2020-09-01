var canvas, backgroundImage;
var ground;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var dog,food,hole;
function preload(){
dogImage=loadImage("images/dog.png");
foodImage=loadImage("images/runner2.jpg");
holeImage=loadImage("images/hole.webp");
    }


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
   
 
}


function draw(){
    if(playerCount === 4){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    };
  }
  

