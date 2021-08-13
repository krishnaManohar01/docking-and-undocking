var iss,spacecraft,hasDocked=false

function setup() {
  
  createCanvas(800,400);
 iss = createSprite(330, 130, 50, 50);
 iss.addImage(issimg)
 iss.scale=0.35

 spacecraft=createSprite(285,240)
 spacecraft.addImage(spacecraft1)
 spacecraft.scale=0.15
}

function draw() {
  background(bg);  
  if(!hasDocked)
  {
    spacecraft.x+=random(-1,1)
    if (keyDown("LEFT_ARROW"))
    {
      spacecraft.addImage(spacecraft3)
      spacecraft.x-=1
    }

    if (keyDown("RIGHT_ARROW"))
    {
      spacecraft.addImage(spacecraft4)
      spacecraft.x+=1
    }

    if (keyDown("DOWN_ARROW"))
    {
      spacecraft.addImage(spacecraft2)
         }

     if (keyDown("UP_ARROW"))
    {
           spacecraft.y-=1
    }

  }
  if(spacecraft.y<=iss.y+60 && spacecraft.x<=iss.x+10)
  {
    hasDocked=true
    textSize(25)
    fill("white")
    text("Docking Succesful",200,300)
  }
  drawSprites();

}

function preload()
{
  bg=loadImage("Docking-undocking/spacebg.jpg")
  issimg=loadImage("Docking-undocking/iss.png")
  spacecraft1=loadImage("Docking-undocking/spacecraft1.png")
  spacecraft2=loadImage("Docking-undocking/spacecraft2.png")
  spacecraft3=loadImage("Docking-undocking/spacecraft3.png")
  spacecraft4=loadImage("Docking-undocking/spacecraft4.png")
}