# Template Repo for p5.js WebSerial Projects

## Description

This is a template that can be useful for creating visual/audio applications (using the p5.js javascript library) that respond to sensors and other physical inputs (from a microcontroller like an Arduino).

## How to Use this Template Repo

This is a *GitHub template* repo. To use it, go to [the repo URL](https://github.com/FSUdigitalmedia/p5js_webserial) and click "Use this template." This will create a new repo, containing all of the files from this repo, in your GitHub account.

Don't forget to replace this `README.md` file with information about your own project, at some point.

(PS: Don't forget to change the title in the `index.html` file.)

## How to Use the Code

The files and directory structure will look familiar if you've used [our p5.js template repos](https://github.com/orgs/FSUdigitalmedia/repositories?q=&type=template&language=&sort=) before. The [libraries](libraries/) folder contains copies of both the p5.js and WebSerial libraries. The code inside `serialfunctions.js` could just as easily be inside `sketch.js`. It contains functions specific to WebSerial communications. They're in a separate file to simplify `sketch.js` and it's unlikely that you'll need to change them for your project. Definitely look at the code in there, so you can understand how everything works.

This template project expects an Arduino (or similar) to be connected via a serial port. The Arduino program (contained in the [arduino](arduino/) folder, for reference) begins by sending the string `"hello"` every 1/3 second until it gets a byte of data from the p5.js sketch. Once that happens, the Arduino sends the current sensor data in the form of a comma-separated list of numbers, followed by an end-of-line character. The p5.js sketch has been waiting for that string to be sent and when it receives it, it responds by requesting another. In this way, the two sides enter into a call-and-response conversation. Each time the p5.js sketch receives the comma-separated list of numbers, it breaks it into an array - with each item containing one of the numbers.

This template code can get you pretty far without having to make changes. Even if the number, or type, of sensors attached to the Arduino changes, the only place you should need to make changes is in the `draw()` function, where your code does something with the incoming data (eg: drawing on the screen, displaying text, etc.).

### Call and Response

Why bother with this back-and-forth communication? The alternative is to just have the Arduino continuously send data, without being asked for it. It is possible, in that scenario, that the p5.js sketch won't be able to keep up. In that case, you might notice that the sketch's response to the incoming data starts lagging behind the physical data at the sensors. This setup avoids that problem and honestly feels like a more civilized conversation between the two sides.

## Credits

This template was created by [Rob Duarte](https://github.com/rahji). Much of the code was adapted from the labs that [Tom Igoe](https://tisch.nyu.edu/about/directory/itp/3558397) wrote for his [Physical Computing course at ITP](https://itp.nyu.edu/physcomp/).