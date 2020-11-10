class String{
    constructor(bodyA, bodyB, offsetX, offsetY){
        

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x:offsetX, y:offsetY},
            stiffness: 0.04,
            
        }
        this.offsetX = offsetX
        this.offsetY = offsetY
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y-35, pointB.x + this.offsetX, pointB.y + this.offsetY);
              
    }
       
}