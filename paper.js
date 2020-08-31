        class Paper{

            constructor(x,y,width,height){

                var options = {

                    'isStatic': false,
                    'restitutution': 0.3,
                    'friction': 0.5,
                    'density': 1.2
                }

                 this.width = width;
                 this.height = height;
                 this.body = Bodies.circle(x,y,width,height,options);

                 World.add(world,this.body);

            }


            display(){


                var pos =this.body.position;
                translate(pos.x, pos.y);

                ellipseMode(RADIUS);
                strokeWeight(2);
                stroke("green")
                fill(255);
                ellipse(pos.x,pos.y,this.width,this.height);





            }















        }