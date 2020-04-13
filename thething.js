class Boxes{
    constructor(x, y, width, height) {
        var options = {
           restitution: 0.1,
            friction: 10,
            density:100000 
          }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

        this.image = loadImage ("box.png");
        this.visibility = 255
      }
      display(){


        fill ("black")
        imageMode(CENTER);
        image(this.image , this.body.position.x,this.body.position.y, this.width, this.height);
        
        
      }
}

