class ClaseBalas{
    constructor(x,y){
        var option={
            isStatic:true
        }
           //this.x=x
           //this.y=y
           this.r=20 
           this.body=Bodies.circle(x,y,this.r,option)
           this.speed=0.05
           this.isBroken=false
           this.ImM=loadImage("assets/cannonball.png")
           this.animation=[this.ImM]
           this.trayectoBala=[]
           
          
           World.add(world,this.body)
         }

        Disparos(){
            var angleB=pistola.a-25
            angleB=angleB*(3.14/180)
            var velocidadB=p5.Vector.fromAngle(angleB)
            velocidadB.mult(0.5)
            Matter.Body.setStatic(this.body,false)
            Matter.Body.setVelocity(this.body,{x: velocidadB.x*(180/3.14),y: velocidadB.y*(180/3.14)})
        }
        MostrarBala(){ 

            var pos = this.body.position
            push();
            imageMode(CENTER);
            image(this.ImM,pos.x,pos.y,this.r,this.r);
            pop();
            if(this.body.velocity.x>0&&pos.x>10){
                var posiciones=[pos.x,pos.y]
                //this.trayectoBala.push(posiciones)
            }
            for(var conteo=0;conteo<this.trayectoBala.length;conteo++){
                image(this.ImM,this.trayectoBala[conteo][0],this.trayectoBala[conteo][1],5,5)
            }
        }

        animacion(){
             this.speed=0.05 
        }

        remove(index){this.isBorken=true 
            Matter.body.setVelocity(this.body,{x:0,y:0})
            this.animation=waterSplashAnimation
            this.speed= 0.05
            this.r=150
            setTimeout(()=>{
                Matter.World.remove(world,municionMatriz[index].body)
                delete municionMatriz[index]
                

            },3000
            )
        }
    }