
class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
    }
      display(){
        if(this.body.speed<3){
           console.log(this.body.speed);
          super.display();
        
    
    }
    else{
      World.remove(world,this.body);
      push();
      
      this.Visibility=this.Visibility - 5
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50)
      pop();
     }
  
  }
  score(){
    if(this.visibility<0 && this.visibility >-102){
      score++;
    }
}
}
  