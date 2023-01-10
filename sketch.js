let isRunning = true; // flag to track the running state
let angle = 0;

// place functions at the top of the page before code calls functions, hoisted anyways but makes sure that fns are available to be called when needed, makes code easier to read and understand
function setup() {
  createCanvas(500, 500);
  background(0);
  button = createButton("Pause Animation");
}

function calcWeight() {
  //set to 5 as max range // larger scaling factor slow down the rate of change
  let weight = ((frameCount / 30) % 10) + 1; // map frameCount, starting at 1
  if (weight > 6) {
    // if the stroke weight is greater than 6, decrease it by 1 on each frame
    weight = 10 - weight + 2;
  }
  strokeWeight(weight);
}

function calcAngle() {
  angle = map(sin(frameCount / 60), -1, 1, 0, 3);
}

function calcColor() {
  let rainbow = frameCount % 360;
  stroke(color(`hsl(${rainbow}, 100%, 50%)`)); // set the stroke color using the rainbow value
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}

function mousePressed() {
  isRunning = !isRunning; // toggle the running flag
  if (isRunning) {
    loop(); // start the draw() function being called repeatedly
  } else {
    noLoop(); // stop the draw() function from being called repeatedly
  }
}

function draw() {
  background(255);
  translate(width * 0.5, height);
  branch(100);
  calcWeight();
  calcAngle();
  calcColor();
}
