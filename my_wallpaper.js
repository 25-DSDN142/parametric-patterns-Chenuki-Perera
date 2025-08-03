//your parameter variables go here!
let headd    = 80;   
let eard     = 25;   
let eyed     = 40;    
let nosew    = 10;   
let noseh    = 8;     

// THIS FILE IS THE RIGHT ONE

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
   push();
    translate(100,100); // center the bear
    noStroke();
    fill(100); // soft grey-brown
    // head
    ellipse(0, 0,headd,headd);
    // ears
    ellipse(-headd/2+10,-headd/2+10,eard,eard);
    ellipse(headd/2-10,-headd/2+10,eard,eard);
    // EYEBALLS
    fill(255); // white eye base 
    ellipse(-15,-5,eyed+4,eyed+4);
    ellipse(15,-5,eyed+4,eyed+4);
    // eyes
    fill(0);
    ellipse(-15,-5,eyed,eyed);
    ellipse(15,-5,eyed,eyed);
    // nose
    fill(40);
    ellipse(0,15,nosew,noseh);
    // mouth
    stroke(40);
    line(0,20,0,25);
    // smiling arc
    noFill();
    stroke(40);
    strokeWeight(2);
    arc(0,20,20,10,0,180);


   pop();
}


