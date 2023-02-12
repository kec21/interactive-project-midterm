const serial = new p5.WebSerial();
let incomingSerialData = []; // an array

function setup() {
  createCanvas(600,600);
  noStroke();

  // set up all of the functions that will deal with serial stuff
  // the functions are defined in a separate file (serialfunctions.js)
  if (!navigator.serial) {
    alert("WebSerial is not supported in this browser. Try Chrome or MS Edge.");
  }
  serial.getPorts();                    // find serial ports
  serial.on("noport", makePortButton);  // choose a serial port
  serial.on("portavailable", openPort); // open the port
  serial.on("requesterror", portError); // handle serial errors
  serial.on("data", serialEvent);       // handle incoming serial data
  serial.on("close", makePortButton);
  // add serial connect/disconnect listeners:
  navigator.serial.addEventListener("connect", portConnect);
  navigator.serial.addEventListener("disconnect", portDisconnect);
}

function draw() {
  // joystick demo - replace this with your code
  background("lightBlue");
  let x = map(incomingSerialData[0],0,1023,0,width);
  let y = map(incomingSerialData[1],0,1023,0,width);
  if (incomingSerialData[2]) {
    fill("darkBlue");
  } else {
    fill("red");
  }
  ellipse(x,y,60,60);
}