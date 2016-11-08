//----------------------------------------------------
// DT Bootcamp 2016, Parsons School of Design.
// Day 2, Example 3, Theme: If Statement
//----------------------------------------------------

var w, h;

function setup() {
  //create a square shape canvas (500 * 500)
  createCanvas(500, 500);
  w = width/2; /// half of the width is 250
  h = height/2; ///250
}

function draw() {
  background(255);
  
  //set the stroke to be black
  stroke(0);

  //draw two black lines to divide the square canvas varo 4 small equal squares
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
  //line(w,0,w,height);
  //line(0,h,width,h);

  // Fill with a black color, no stroke
  noStroke();
  fill(0);

//---- Depending on the mouse location, a different rectangle is displayed. ----//   

  if (mouseX < w && mouseY < h) { //The mouse is at the upper-left corner
  
    // draw a rectangle at the upper-left corner with the filled color
    rect(0, 0, w, h);
    
  } else if (mouseX > w && mouseY < h) { //The mouse is at the upper-right corner
  
    // draw a rectangle at the upper-right corner with the filled color
    rect(width/2, 0, w, h);
    
  } else if (mouseX < w  && mouseY >h) {//The mouse is at the bottom-left corner
  
    // draw a rectangle at the bottom-left corner with the filled color
    rect(0, height/2, w, h);
    
  } else if (mouseX > w && mouseY > h) {//The mouse is at the bottom-right corner
    // draw a rectangle at the bottom-left corner  with the filled color
    rect(w, h, w, h);
  }
  
//---- Depending on the mouse location, a different rectangle is displayed. ----//   

}