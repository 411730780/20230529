class Obj{
    constructor(args){
      this.p =args.p ||createVector(random(width),random(height))
      this.v =createVector(random(-1,1),random(-1,1))
      this.size =random(2,5)
      this.color = random(fill_colors)
      this.stroke =random(stroke_colors)
    }
    draw()
    {
      push()
      translate(this.p.x,this.p.y)
      scale((this.v.x<0?1:-1),-1)
      fill(this.color)
      stroke(this.stroke)
      strokeWeight(3)
      beginShape()
      for(var i =0;i<points.length;i=i+1){
        //line(points[i][0]*this.size,points[i][1]*this.size,points[i+1][0]*this.size,points[i+1][1]*this.size)
        vertex(points[i][0]*this.size,points[i][1]*this.size)
        
      }
      endShape()
      pop()
    }
    update(){
      this.p.add(this.v)//一樣的效果+
      
      let mouseV = createVector(mouseX,mouseY)
      let delta = mouseV.sub(this.p).limit(this.v.mag()) //-
       this.p.add(delta)
      if(this.p.x<=0 || this.p.x>=width)//碰壁
      {
        this.v.x =-this.v.x
      }
      if(this.p.y<=0 || this.p.y>=height)
      {
        this.v.y =-this.v.y
      }
    }
    isBallInRanger(x,y){
      let d =dist(x,y,this.p.x,this.p.y)
      if(d<this.size*12){
        return true
      }else{
        return false
      }
      
    }
  }