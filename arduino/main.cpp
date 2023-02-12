#include <Arduino.h>
// above line is required for PlatformIO

// connect a joystick to the Arduino:
// pins A0 & A1 are connected to the X & Y pots of the joystick
// pin 3 is connected to the button/switch pin of the joystick

const int buttonPin = 3;

void setup() {
  Serial.begin(9600);

  pinMode(buttonPin, INPUT_PULLUP);
  
  while (Serial.available() <= 0) {
    Serial.println("hello"); // send a "ready" message
    delay(300);              // every 1/3 second
  }
}

void loop() {
  if (Serial.available() > 0) {
    // read (and discard) the incoming byte:
    int inByte = Serial.read();

    // joystick X value
    int sensorValue = analogRead(A0);
    Serial.print(sensorValue);
    Serial.print(",");

    // joystick Y value
    sensorValue = analogRead(A1);
    Serial.print(sensorValue);
    Serial.print(",");

    // joystick button
    sensorValue = digitalRead(buttonPin);
    Serial.println(sensorValue);
  }
}