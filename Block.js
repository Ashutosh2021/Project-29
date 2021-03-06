class Block{
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,40,50, options);
        this.x=x;
        this.y=y;
        this.width = 40;
        this.height =50;
       
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2.5);
        fill("lightBlue");
        rect(0,0,this.width,this.height);
        pop();
      }
}