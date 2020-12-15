var bullet,wall,speed,weight,thickness;
function setup() {
  createCanvas(1200,400);
  bullet =createSprite(400, 200, 50, 15);
  wall =createSprite(1000,200,40,200)
  bullet.shapeColor="white"
  wall.shapeColor="grey"
  speed=Math.round(random(50,130))
  weight=Math.round(random(400,1500))
  thickness=Math.round(random(22,83))
  console.log(speed);
  console.log(weight)
bullet.velocityX=speed
}

function draw() {
  background(0); 
 bulletouch(bullet,wall)
  drawSprites();

}
function bulletouch(obj1,obj2){
  if (obj2.x-obj1.x < (obj1.width+obj2.width/2)){
    obj1.velocityX=0;
    var deformation =0.5* weight * speed *speed/(thickness * thickness * thickness)
    if (deformation >10){
     
   
      obj2.shapeColor="red"
    }
    if (deformation<10){
      obj2.shapeColor="green"
 
    }
  }
}