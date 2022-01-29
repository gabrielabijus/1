var retFixo, retMovendo;
var caixa1, caixa2;
function setup() {
  createCanvas(1200, 800);
  retFixo = createSprite(600, 400, 50, 80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retMovendo = createSprite(400, 200, 80, 30);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;
  caixa1 = createSprite (100, 100, 50, 50);
  caixa1.shapeColor = "yellow";
  caixa2 = createSprite (100, 400, 50, 50);
  caixa2.shapeColor = "yellow";
  caixa1.velocityY = 5;
  caixa2.velocityY = -5;
  caixa1.debug = true;
  caixa2.debug = true;
}
function draw() {
  background(0, 0, 0);
  retMovendo.x = World.mouseX;
  retMovendo.y = World.mouseY;
  if (retMovendo.x - retFixo.x < retFixo.width / 2 + retMovendo.width / 2
    && retFixo.x - retMovendo.x < retFixo.width / 2 + retMovendo.width / 2
    && retMovendo.y - retFixo.y < retFixo.height / 2 + retMovendo.height / 2
    && retFixo.y - retMovendo.y < retFixo.height / 2 + retMovendo.height / 2
    
    ) {
    retMovendo.shapeColor = "red";
    retFixo.shapeColor = "red";
  } else {
    retMovendo.shapeColor = "green";
    retFixo.shapeColor = "green";
  }

  if (caixa1.y - caixa2.y < caixa1.height /2 + caixa2.height /2
    && caixa2.y - caixa1.y < caixa1.height /2 + caixa2.height /2
    
    ) {
    caixa1.velocityY = caixa1.velocityY * (-1);
    caixa2.velocityY = caixa2.velocityY * (-1);
  }
  drawSprites();
}
