class Bullet{
    constructor(args){
        this.r = args.r ||10
        this.p = args.p ||createVector(width/2,height/2)
        this.v = args.v ||createVector(mouseX-width/2,mouseY-height/2).limit(10)
        this.color = args.color ||"red"
      }
      draw(){//飛彈
       push()
        translate(this.p.x,this.p.y)
        fill(this.color)
        noStroke()
        rect(0,0,this.r)
        ellipse(0,0,this.r)
        //rectMode(CENTER)
        //rect(0,0,20,40)
       pop()
      }
      update(){
       this.p.add(this.v)
      }
}