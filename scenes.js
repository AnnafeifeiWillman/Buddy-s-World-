
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================


////////////////////////////// 1 /////////////////
function splash()  {
  var textX;
  var textY;
  var loy= 0;  // exists as data saved when in the splash scene
  let btnevent1 =false;
  let btnevent2 =false;
  // let btnevent3 =false;
  // let btnevent4 =false;

 

  // scene1.setup
  this.setup = function() {
    console.log("We are at setup for splash");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    outputVolume(.15);  // turn down the volume.
    backgroundImage = loadImage('assets/background_3.png');
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {///////////////////////  3  ////////////////////////

    function walk() {
      this.y = 0;
      this.lox = 50;
      this.loy = 120;
      let btnevent1 = false;
    
      this.setup = function () {
        console.log("We are at setup for walk");
        // make sure ghost is gone from this scene
        backgroundImage3 = loadImage('assets/background_5.png');
      };
    
      this.enter = function () {
        push();
        console.log("We are at entering walk");
    
        if (!snd1.isPlaying()) {
          snd1.play();
        }
    
        // make sure ghost is not visible in this scene
        ghosty.visible = false;
    
        pop();
      };
    
      this.draw = function () {
        // this is the draw function for all p5.play commands
        push();
    
        image(backgroundImage3, 0, 0, width, height);
    
        // You can put your other drawing code here
    
        pop();
    
        // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
        btnevent1 = checkButtonPress("About this Exercise", width - 150, height - 70, 100, 40, color(220, 100, 100), color(100), color(250));
        if (btnevent1) {
          // help
          btnevent1 = false;
          this.sceneManager.showScene(nap);
        }
      };
    
      this.mousePressed = function () {};
    }
    
      console.log("We are at entering splash");
     image(backgroundImage,0,0,1200,1000);
      textAlign(CENTER);
      textSize(30);
      noStroke();

// ghosty.changeAnimation("stand");
//         // reset or disable the other scenes and their stuff
//         // turn off the other scene stuff
//         snd1.stop();
//         ghosty.position.x = 50;
//         ghosty.position.y = 80;
//         ghosty.position.x =  width/2+100;
//         ghosty.position.y =  height/2+150;
//         ghosty.visible = true;
//         ghosty.changeAnimation("stand");
//         ghosty.scale = 0.5;
  
      // make sure ghost is gone from this scene
    ghosty.visible = false;
    

  }


  this.draw = function()
  {
    push();
    image(backgroundImage,0,0,width,height);
    // this is the draw function for all p5.play commands
    
    
      ghosty.animation.frameDelay = 25;
  ghosty.changeAnimation("stand");
  ghosty.scale = 0.5;
      
      pop();
  
 
                           // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    
                          // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent2 = checkButtonPress("Find Buddy",width/2-90,height/2,120,40,color(255,102,176),color(255,181,217),color(250));
    if (btnevent2) {   // main or next scene
      btnevent2 = false;
       playshortsound();
       this.sceneManager.showNextScene();
    }

   }

 

  this.mousePressed = function() {

   
  }
}

///////////////////////  2  ////////////////////////

function main()  {
  this.y = 0;

   this.lox = 50;


  this.loy = 120;


  let btnevent1 = false;
 


 this.setup = function() {
     console.log("We are at setup for main");
     // make sure ghost is gone from this scene
     backgroundImage2 = loadImage('assets/background_1.png');
 }

 this.enter = function()
 {
   push();
   console.log("We are at entering main");
 
  

   if ( !snd1.isPlaying() ) {
     snd1.play();
  }

pop();
 }




   this.draw = function() {
    
     // this is the draw function for all p5.play commands
    push();
   
    image(backgroundImage2,0,0,width,height);

    ghosty.position.x = 50;
    ghosty.position.y = 80;
    ghosty.position.x =  width/2+100;
    ghosty.position.y =  height/2+100;
    ghosty.visible = true;
    ghosty.changeAnimation("stand");
   

   ghosty.animation.frameDelay = 25;
   //ghosty.changeAnimation("stand");
   ghosty.scale = 0.6;

   push();
     textAlign(LEFT);
     textSize(40);
     text('black');
     text( "This is Buddy. ฅ^•ﻌ•^ฅ ", 70,100);
     //text( "Click on me, to go back to the main page,\nthen click and roll over me to see what i can do. ", 1130, 220);
pop();
     
 
   pop();


   // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
   btnevent1 = checkButtonPress("About this Exercise",width-230,height-70,200,40,color(220,100,100),color(100),color(250));  
   if (btnevent1) { // help
     btnevent1 = false;
     playshortsound();
     this.sceneManager.showScene( help );
   }


   }  //end

   this.mousePressed = function()
   {

   }


}



////////////////////////////// 3 /////////////////

function walk()  {
  this.y = 0;

   this.lox = 50;


  this.loy = 120;


  let btnevent1 = false;
 


 this.setup = function() {
     console.log("We are at setup for main");
     // make sure ghost is gone from this scene
     backgroundImage3 = loadImage('assets/background_5.png');
 }

 this.enter = function()
 {
   push();
   console.log("We are at entering main");
 
  

   if ( !snd1.isPlaying() ) {
     snd1.play();
  }

pop();
 }




   this.draw = function() {
    
     // this is the draw function for all p5.play commands
    push();
   
    image(backgroundImage3,0,0,width,height);

    ghosty.position.x = 50;
    ghosty.position.y = 80;
    ghosty.position.x =  width/2;
    ghosty.position.y =  height/2+100;
    ghosty.visible = true;
    ghosty.changeAnimation("normal");
   

   ghosty.animation.frameDelay = 13;
   ghosty.changeAnimation("normal");
   ghosty.scale = 0.45;

   push();
     textAlign(LEFT);
     textSize(40);
     text('black');
     text( "Buddy is a very lazy cat and he doesn't like exercising. " , 70,100);
     //text( "Click on me, to go back to the main page,\nthen click and roll over me to see what i can do. ", 1130, 220);
pop();
     
 
   pop();


   // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
   btnevent1 = checkButtonPress("About this Exercise",width-230,height-70,200,40,color(220,100,100),color(100),color(250));  
   if (btnevent1) { // help
     btnevent1 = false;
     playshortsound();
     this.sceneManager.showScene( help );
   }


   }  //end

   this.mousePressed = function()
   {

   }


}

////////////////////////////// 4 /////////////////




function nap()  {
  this.y = 0;

   this.lox = 50;


  this.loy = 120;


  let btnevent1 = false;
 


 this.setup = function() {
     console.log("We are at setup for main");
     // make sure ghost is gone from this scene
     backgroundImage4 = loadImage('assets/background_2.png');
 }

 this.enter = function()
 {
   push();
   console.log("We are at entering main");
 
  

   if ( !snd1.isPlaying() ) {
     snd1.play();
  }

pop();
 }




   this.draw = function() {
    
     // this is the draw function for all p5.play commands
    push();
   
    image(backgroundImage4,0,0,width,height);

    ghosty.position.x = 50;
    ghosty.position.y = 80;
    ghosty.position.x =  width/2 + 300;
    ghosty.position.y =  height/2+50;
    ghosty.visible = true;
    ghosty.changeAnimation("tired");
    ghosty.scale = 0.2;

   ghosty.animation.frameDelay = 13;
   ghosty.changeAnimation("tired");
   ghosty.scale = 1.1;

   push();
     textAlign(LEFT);
     textSize(40);
     text('black');
     text( "Buddy loves taking naps." , 70,100);
     //text( "Click on me, to go back to the main page,\nthen click and roll over me to see what i can do. ", 1130, 220);
pop();
     
 
   pop();


   // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
   btnevent1 = checkButtonPress("About this Exercise",width-230,height-70,200,40,color(220,100,100),color(100),color(250));  
   if (btnevent1) { // help
     btnevent1 = false;
     playshortsound();
     this.sceneManager.showScene( help );
   }


   }  //end

   this.mousePressed = function()
   {

   }


}



function help()  {
  this.y = 0;

   this.lox = 50;


  this.loy = 120;


  let btnevent1 = false;
 


 this.setup = function() {
     console.log("We are at setup for main");
     // make sure ghost is gone from this scene
     backgroundImage5 = loadImage('assets/background_4.png');
 }

 this.enter = function()
 {
   push();
   console.log("We are at entering main");
 
  

   if ( !snd1.isPlaying() ) {
     snd1.play();
  }

pop();

ghosty.visible = false;
 }




   this.draw = function() {
    
     // this is the draw function for all p5.play commands
    push();
   
    image(backgroundImage5,0,0,width,height);

   

   push();
     textAlign(LEFT);
     textSize(40);
     text('black');
     text( "About this Exercise" , 70,100);
     text( "I wanted to create a piece that would show scenes of a cat \ndoing different activities. All the drawings of each scene are \ncreated by me, and the music is 'Fukashigi No Karte' but lofi. ", 70, 220);

     //text( "Click on me, to go back to the main page,\nthen click and roll over me to see what i can do. ", 1130, 220);
pop();
     
 
   pop();


   // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
 


   }  //end

   this.mousePressed = function()
   {

   }


}







 








function checkButtonPress(str,bx,by,boxW,boxH,upcolor,ovcolor,dncolor) {

  let btnc = "";
  let btnstate =false;

  // Test if the cursor is over the box
  if ( mouseX > bx - boxW &&
       mouseX < bx + boxW &&
       mouseY > by - boxH &&
       mouseY < by + boxH ) {
       overBox = true;

    if (!mouseIsPressed) {
      stroke(255);
      btnc = ovcolor;
      btnstate = false;
    } else {
      console.log(str + " pressed");
      stroke(255);
      btnc = dncolor;
      btnstate = true;
    }

  } else {
    stroke(255);
    btnc = upcolor;
    overBox = false;
  }

  push();
  translate(bx,by);
  fill(btnc);
  rect(0, 0, boxW, boxH,10); // draw the box

  fill(20);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text (str,boxW/2,28);

    pop();

    return btnstate;

}



function playshortsound() {
  if ( !snd2.isPlaying() ) {
    snd2.play();
  } else {
     snd2.stop();
 }


}