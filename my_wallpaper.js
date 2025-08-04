let strawberrySize = 70;
let leafColor;
let strawberryColor;
let flowerColor;
let seedColor; 

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false);

  
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 50;

  
  strawberryColor = color(255, 87, 115); 
  leafColor = color(45, 130, 55); 
  flowerColor = color(255); 
  seedColor = color(255, 255, 255, 180); 
}

function wallpaper_background() {
  background(255, 204, 217); 
}

function my_symbol() {
  drawStrawberry(100, 100, strawberrySize);
  drawFlower(40, 50, 8);
  drawFlower(140, 30, 6);
  drawFlower(60, 140, 6);
  drawStrawberry(150, 150, 40);
  drawStrawberry(40, 160, 30);
}



function drawStrawberry(x, y, size) {
  push();
  translate(x, y);
  noStroke();

  
  fill(strawberryColor);
  beginShape();
  vertex(0, -size / 2.5);
  bezierVertex(size / 2, -size / 2, size / 2.5, size / 2, 0, size / 2);
  bezierVertex(-size / 2.5, size / 2, -size / 2, -size / 2, 0, -size / 2.5);
  endShape(CLOSE);

  
  fill(255, 255, 255, 180);
  ellipse(size * 0.15, -size * 0.15, size * 0.2, size * 0.3);

  
  fill(seedColor);
  for (let i = 0; i < 10; i++) {
    let angle = random(TWO_PI);
    let r = size * 0.2 + random(size * 0.1);
    ellipse(r * cos(angle), r * sin(angle), 3, 5);
  }

  
  fill(leafColor);
  for (let i = 0; i < 3; i++) {
    ellipse(
      cos((i * TWO_PI) / 3) * size * 0.2,
      -size * 0.5,
      size * 0.3,
      size * 0.2
    );
  }
  pop();
}

function drawFlower(x, y, petalSize) {
  push();
  translate(x, y);
  fill(flowerColor);
  noStroke();
  for (let i = 0; i < 6; i++) {
    ellipse(0, petalSize, petalSize, petalSize * 1.2);
    rotate(PI / 3);
  }
  pop();
}


