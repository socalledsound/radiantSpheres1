/*eslint-disable*/

let xPos = 100;
let colors = [];
let numColors = 20;


function setup(){
    createCanvas(1000, 1000, WEBGL);
    frameRate(10);
    for(var i = 0; i < numColors; i++){
        colors[i]= [random(255),random(255),random(255),255];      
    }
   
  }
  
  function draw(){
    background(0);
    ambientLight(200);
    pointLight(random(250), random(250), random(250), 100, 100, 0);
    specularMaterial(random(250),random(250),random(250),200);
   // translate(xPos,0,0);
  
    for(var j = 0; j < 120; j++){
       
     
      for(var i = 0; i < 20; i++){
        push();
        //translate(sin(frameCount/10)*10*i,sin(frameCount/10)*10*i,sin(frameCount/100)*10*i);
        //translate(sin(frameCount/100)*100*i/2,0,0);

        translate(100*i,0,0);
        //scale(random(1,2));
        //translate(sin(frameCount * 0.01 + j) * 20, sin(frameCount * 0.01 + j) * 20, i * 0.1);
        
       var coinDraw = random(50);

        if(j > 1 && i > 1 && coinDraw > 30) {
            specularMaterial(colors[i]);
            sphere(50); 
        }
        
        pop();
        
      }
      translate(0,j*10,-100);
      rotateZ(xPos/10);
      //translate(-200,0,0)
    }
    xPos+=0.005;
  }