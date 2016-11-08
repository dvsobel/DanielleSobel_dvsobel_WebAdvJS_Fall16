//----------------------------------------------------
// DT Bootcamp 2016, Parsons School of Design.
// Day 2, Example 1, Theme: Basic Graphics.
//----------------------------------------------------


function setup() {
  createCanvas(500, 500); //Size of our sketch's window
}

function draw() {
  //Set the background to the color with a RGB value of (22,166,185)
  background(22,166,185);
  
  //declare the coordinate system of drawing rectangles
  rectMode(CENTER); 
  
  //set the stoke color to black
  //stroke(0);
  
  //no stroke..
  noStroke(); 

   //set a RGB color of (225,195,154)
  fill(225,195,154);
  //draw a 100px by 80px rectangle at the center position with the color we set above
  rect(width/2, height/2, 200, 80); 
  
  //set a RGB color of (214,88,120) with an opacity of 200 (out of 255)
  fill(214,88,120,200); 
  //draw a 100px by 150px ellipse at the center position
  ellipse(width/2, height/2, 100, 150); 
}