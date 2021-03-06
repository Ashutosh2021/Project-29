class SlingShot{

    constructor(bodyA,pointB){
        var options={
           
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length:10

        }

        this.sling=Constraint.create(options);
        World.add(world,this.sling);

    
    
    }

    display(){

     
        
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.pointB;

        if(this.sling.bodyA){
        push();
        strokeWeight(2.5);
        stroke(0,228,208);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
        }

      }  

    fly(){

        this.sling.bodyA=null;
    }
    }

   
