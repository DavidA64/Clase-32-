class ClaseBarco{
    constructor(x,y,w,h,posicionBote,boatAnimation){
        //this.x=x
        //this.y=y
        this.h=h
        this.w=w
        this.speed=0.05
        this.posicionBote=posicionBote
        this.animation=boatAnimation
        this.isBroken=false
        this.body=Bodies.rectangle(x,y,w,h)
        //this.ImU=loadImage("assets/boat/boat.png")
        World.add(world,this.body)
    }

   MostrarBarquito(){
        var pos=this.body.position
        var angle= this.body.angle 
        var index=floor(this.speed%this.animation.length)
        push() 
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER)
        image(this.animation[index],0,this.posicionBote,this.w,this.h)
        pop()
    }
    animacion(){
        this.speed+=0.05;
        
    }
    remove(index){
            this.animation=brokenBoatAnimation
            this.speed=0.05
            this.width=300
            this.height=300
            this.isBroken=true

        setTimeout(()=>{ 
            Matter.World.remove(world,barcomatriz[index].body);
            delete barcomatriz[index]
            
            
        },4000)

    }
}


