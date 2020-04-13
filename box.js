class Box{
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
      
      }
      display(){
      
        

        if (this.body.speed < 5.8) {
          fill ("black")
          imageMode(CENTER);
          image(this.image , this.body.position.x,this.body.position.y, this.width, this.height);

          textSize(20);
text (this.score ,200,200);
        }
    
        else  {
          World.remove(world,this.body);
          push();
          this.visibility = this.visibility - 10
          tint (255,this.visibility);
          image (this.image,this.body.position.x,this.body.position.y,50,50);
          pop();

         
        }

        
      }
}







