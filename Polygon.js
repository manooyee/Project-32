class Polygon {
    constructor(x, y,width,height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.3,
          //isStatic:true
      }
      this.image = loadImage("polygon.png")
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width = width
      this.height = height
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,40,40);
      
    }
  };