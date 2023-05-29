let points = [[12, 2], [5, 5], [2, 5], [-3, 7], [-1, 4.5], [-6, 4], [-11, -1], [-7, -5], [-1, -7], [3, -8], [5, -11], [4, -7], [6, -5], [3, -6], [2, -6], [-1, -5], [-6, -2], [0, -1], [-1, -3], [2, -2], [3, -1], [5, -1], [4, 0], [8, 0], [9, 1], [12, 2]]
var stroke_colors = "8ecae6-219ebc-023047-ffb703-fb8500r44".split("-").map(a=>"#"+a)
var fill_colors = "ffcdb2-ffb4a2-e5989b-b5838d-6d6875".split("-").map(a=>"#"+a)

function preload(){
 dolphin_sound= loadSound("sound/dolphin.mp3")
 bullet_sound= loadSound("sound/Launching wire.wav")
}
var ball
var balls =[]
var bullet
var bullets=[]
var score =0
function setup(){
 createCanvas(windowWidth,windowHeight);
 for(j=0;j<50;j=j+1)
 {
   ball =new Obj({})
   balls.push(ball)

 }
 
}

function draw(){
  background(220);


  for(let ball of balls){//鯊魚
    ball.draw()
    ball.update()

    for(let bullet of bullets){
      if(ball.isBallInRanger(bullet.p.x,bullet.p.y))
      {
       score =score+1
       dolphin_sound.play()
       balls.splice(balls.indexOf(ball),1)
       bullets.splice(bullets.indexOf(bullet),1)
      }
    }
  }


  for(let bullet of bullets){//飛彈
    bullet.draw()
    bullet.update()
  }
  textSize(50)
  text(score,50,50)
  fill("#01497c")

  push()//砲台
  let dx = mouseX-width/2
  let dy = mouseY-height/2
  let angle = atan2(dy,dx)

   translate(width/2,height/2)
   rotate(angle)
   fill("#ecf39e")
   noStroke()
   ellipse(0,0,57)
   fill("#4f772d")
   triangle(-25,-25,-25,25,50,0)
  pop()
}

function mousePressed(){
  //for(let ball of balls){     //(刪除)
  //  if(ball.isBallInRanger(mouseX,mouseY)){
  //    balls.splice(balls.indexOf(ball),1)
  //  }
  // }
bullet =new Bullet({
  r:random(10,30),
  color:random(stroke_colors)
})
bullets.push(bullet)
bullet_sound.play()

}
