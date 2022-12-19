'use strict';

let tileCount = 1;
let actRandomSeed = 0;

let colorLeft;
let colorRight;
let alphaLeft=0;
let alphaRight = 100;
let transparentLeft = false;
let transparentRight = false;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);

  colorRight = color(0, 0, 0, alphaRight);
  colorLeft = color(323, 100, 77, alphaLeft);
}

function draw() {
  clear();
  strokeWeight(mouseX / 30);

  randomSeed(actRandomSeed);

  tileCount = mouseY / 15;

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {

      var posX = width / tileCount * gridX;
      var posY = height / tileCount * gridY;

      alphaLeft = transparentLeft ? gridY * 10 : 100;

      colorLeft = color(hue(colorLeft), saturation(colorLeft), brightness(colorLeft), alphaLeft);

      alphaRight = transparentRight ? 100 - gridY * 10 : 100;

      colorRight = color(hue(colorRight), saturation(colorRight), brightness(colorRight), alphaRight);

      var toggle = int(random(0, 2));

      if (toggle == 0) {
        stroke(colorLeft);
        line(posX, posY, posX + (width / tileCount) / 2, posY + height / tileCount);
        line(posX + (width / tileCount) / 2, posY, posX + (width / tileCount), posY + height / tileCount);
      }
      if (toggle == 1) {
        stroke(colorRight);
        line(posX, posY + width / tileCount, posX + (height / tileCount) / 2, posY);
        line(posX + (height / tileCount) / 2, posY + width / tileCount, posX + (height / tileCount), random(0,height));
      }
    }
  }
}