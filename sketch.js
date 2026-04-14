
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


let image1_up, image2_over;
let snd1,snd2;
// var duration;
// var  slideWidth = 500;

// global manager object
var mgr;

// define your p5.play sprites that you want to use in more that 1 scene.
var ghosty;

function preload() {
    // sound should be loaded so its available for all places.
   snd1 = loadSound("assets/bunnygirl_sound.mp3");
   snd2 = loadSound("assets/meow.mp3");
}

function setup() {
    createCanvas(1200, 1000);
    //console.log(hell);
    mgr = new SceneManager();

    ghosty = createSprite(0, 0);
    ghosty.addAnimation("normal", "assets/cat_01.png",  "assets/cat_03.png"); 
     ghosty.addAnimation("stand", "assets/cat_04.png",  "assets/cat_05.png"); 
     ghosty.addAnimation("tired", "assets/cat_06.png",  "assets/cat_08.png");
     // make the sprite invisible until you need it.
    ghosty.visible = false;

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (splash);
    mgr.addScene (main);
    mgr.addScene (walk);
    mgr.addScene (nap);
    mgr.addScene (help);
    

    mgr.showNextScene();

}

function draw()
{

    // passthe current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( splash );
            break;
        case '2':
            mgr.showScene( main );
            break;
        case '3':
            mgr.showScene( walk );
            break;
        case '4':
            mgr.showScene( nap );
            break;
            case '5':
                mgr.showScene( help );
                break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
