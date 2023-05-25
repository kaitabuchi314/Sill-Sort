let values = []; // Array to be sorted
let barWidth; // Width of each bar
let end = 1; // 'end' variable for tracking the subset of elements

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(120);
  generateArray(); // Initialize and shuffle the array
  barWidth = width / values.length;
  
}


function draw() {
  
  for (let i = 0; i < 5; i++) {
    background(220);
    displayBars(); // Display the bars

    // Perform Sill sort steps
    if (end <= values.length) {
      let sill = findSill(); // Find the sill (largest element excluding the last one)
      let sillIndex = values.indexOf(sill);
      if (sillIndex !== -1) {
        moveSillToEnd(sillIndex); // Move sill to the end
      }
      bubbleSort(); // Bubble sort the last 'end' elements
      end++;
    } else {
      console.log("Array sorted:", values);
      noLoop();
    }
  }
  
}

function displayBars() {
  for (let i = 0; i < values.length; i++) {
    let barHeight = map(values[i], 0, height, 0, height);
    stroke(map(values[i], 0, height, 0, 255), map(values[i], 0, height, 0, 255), map(values[i], 0, height, 0, 255));
    let x = i * barWidth;
    let y = height - barHeight;
    fill(map(values[i], 0, height, 0, 255), map(values[i], 0, height, 0, 255), map(values[i], 0, height, 0, 255));
    rect(x, y, barWidth, barHeight);
  }
}


function findSill() {
  let sill = -Infinity;
  for (let i = 0; i < values.length - 1; i++) {
    if (values[i] > sill) {
      sill = values[i];
    }
  }
  return sill;
}

function moveSillToEnd(sillIndex) {
  let sill = values.splice(sillIndex, 1)[0];
  values.push(sill);
}

function bubbleSort() {
  for (let i = values.length - end; i < values.length - 1; i++) {
    for (let j = values.length - end; j < values.length - 1; j++) {
      if (values[j] > values[j + 1]) {
        swap(j, j + 1);
      }
    }
  }
}

function swap(a, b) {
  let temp = values[a];
  values[a] = values[b];
  values[b] = temp;
}

function generateArray() {
  values = [];
  for (let i = 0; i < width / 1; i++) {
    values.push(random(1, height / 1.1));
  }
  shuffle(values, true);
}

// Shuffle function to randomize the array
function shuffle(array, start = 0, end = array.length) {
  let length = end - start;
  for (let i = start; i < end - 1; i++) {
    let j = i + Math.floor(Math.random() * length);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
