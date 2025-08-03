//your parameter variables go here!
let head_w     = 60;
let head_h     = 80;
let ear_w      = 20;
let ear_h      = 30;
let eye_w      = 8;
let eye_h      = 10;
let swirl_size = 12;
let border_gap = 80;


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

   // Subtle background pattern (optional watermark wolf silhouettes)
  push();
    stroke(230);
    fill(230);
    for (let x = 0; x < width; x += 100) {
      for (let y = 0; y < height; y += 100) {
        push();
          translate(x, y);
          scale(0.3);
          draw_wolf_silhouette(); // simplified, light version
        pop();
      }

  }
}
function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  push();
  translate(100, 100); // center of the cell

  // HEAD OUTLINE
  stroke(50);
  strokeWeight(1.5);
  noFill();
  beginShape();
    vertex(-head_w / 2, -head_h / 2 + 10);
    vertex(0, -head_h / 2);
    vertex(head_w / 2, -head_h / 2 + 10);
    vertex(head_w / 2 - 10, head_h / 2);
    vertex(0, head_h / 2 + 10);
    vertex(-head_w / 2 + 10, head_h / 2);
  endShape(CLOSE);

  // INNER FLAME LINES
  stroke(50);
  noFill();
  for (let i = -1; i <= 1; i += 2) {
    beginShape();
      vertex(0, -head_h / 2 + 5);
      vertex(5 * i, -head_h / 2 + 15);
      vertex(0, -head_h / 2 + 25);
      vertex(5 * i, -head_h / 2 + 35);
      vertex(0, -head_h / 2 + 45);
    endShape();
  }

  // EARS
  stroke(50);
  fill(245, 235, 220);
  triangle(-head_w/2, -head_h/2 + 10, -head_w/2 + 10, -head_h/2 - ear_h, -head_w/2 + 20, -head_h/2 + 10);
  triangle(head_w/2, -head_h/2 + 10, head_w/2 - 10, -head_h/2 - ear_h, head_w/2 - 20, -head_h/2 + 10);

  // EYES – almond shaped
  fill(0);
  noStroke();
  beginShape();
    vertex(-20, -8);
    bezierVertex(-15, -15, -5, -15, -10, -8);
    bezierVertex(-5, 0, -15, 0, -20, -8);
  endShape(CLOSE);
  beginShape();
    vertex(20, -8);
    bezierVertex(15, -15, 5, -15, 10, -8);
    bezierVertex(5, 0, 15, 0, 20, -8);
  endShape(CLOSE);

  // NOSE – small dark triangle
  fill(50);
  triangle(-5, 10, 5, 10, 0, 18);

  // BORDER VINES
  stroke(60);
  noFill();
  for (let x = -border_gap; x <= border_gap; x += 2 * border_gap) {
    for (let y = -border_gap; y <= border_gap; y += 2 * border_gap) {
      push();
        translate(x, y);
        rotate(PI / 4);
        // Vine curve
        beginShape();
          vertex(0, 0);
          bezierVertex(10, -10, 20, 10, 30, 0);
        endShape();
        // Leaf detail
        beginShape();
          vertex(15, 0);
          bezierVertex(18, -5, 22, -5, 25, 0);
          bezierVertex(22, 5, 18, 5, 15, 0);
        endShape();
      pop();
    }
  }

  // DIAMOND MOTIFS – mid edges
  fill(50);
  noStroke();
  for (let angle = 0; angle < TWO_PI; angle += HALF_PI) {
    push();
      rotate(angle);
      translate(0, -border_gap);
      rotate(PI / 4);
      rect(-5, -5, 10, 10);
    pop();
  }

  pop();
}

// Optional simplified silhouette for background watermark
function draw_wolf_silhouette() {
  stroke(200);
  noFill();
  beginShape();
    vertex(-head_w/2, -head_h/2 + 10);
    vertex(0, -head_h/2);
    vertex(head_w/2, -head_h/2 + 10);
    vertex(head_w/2 - 10, head_h/2);
    vertex(0, head_h/2 + 10);
    vertex(-head_w/2 + 10, head_h/2);
  endShape(CLOSE);
}
