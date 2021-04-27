class Entity{
    constructor(x, y, width, height, atk, hp) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("Sprites/gethitloop.gif")
         this.atk = atk;
         this.hp = hp;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //rectMode(CENTER);
        //rect(0, 0, this.width, this.height);
        image(this.image, 0,0,this.width,this.height)
        pop();
      }
}