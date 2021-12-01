var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var boyImg;
var pathImg;
function preload(){
  pathImg =loadImage("path.png");
  boyImg =loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup(){
  
  createCanvas(400,400);
 path =createSprite(200,200); 
 path.addImage(pathImg);     //agregar imagen de path
 path.velocityY =-5;//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
 path.scale=1.2;

 boy =createSprite(200,250);   //crear sprite de boy (niño)
 boy.addAnimation("running", boyImg );  //agregar animación para boy
 boy.scale=0.9;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
