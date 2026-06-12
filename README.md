# Parkinson Face & Hand Tracker

A website that tracks your face and hands in 3D using your webcam. It is built with HTML, CSS, and JavaScript using MediaPipe. The overall goal is for that it may help studying the small hand and face movements caused by Parkinson's disease. You do not need any special equipment to use it.

## Live Demo
Try it directly in your browser:
**https://christopherjun979-source.github.io/ParkinsonHandTrack/**

## Features

* **Mirrored Video Box:** The camera view acts like a normal mirror, making it natural and easy to use. The video box sits neatly in the center without blocking any data.
* **On/Off Switches (Control Panel):** You can use the checkboxes at the top to turn tracking on or off for specific parts of the face or individual fingers. Turning a part off instantly hides its data box to keep the screen clean.
* **Two Hand Tracking (Panels A & B):** Tracks both hands at the same time. It measures the X, Y, and Z positions for 21 points on each hand. Each finger has its own color:
  * **Wrist Base:** red
  * **Thumb:** orange
  * **Index Finger:** yellow
  * **Middle Finger:** green
  * **Ring Finger:** blue
  * **Pinky Finger:** purple
* **Face Tracking:** Tracks important parts of the face to watch for movements or shaking:
  * **Left Eye:** cyan
  * **Right Eye:** purple
  * **Lips:** red
* **FPS Counter:** A live speed tracker shows how many frames per second (FPS) the website is processing to make sure the video is smooth.
* **(X, Y, Z) Coordinates:** The numbers show the position of your hand and face as a percentage of the screen size, rather than measuring in inches or centimeters.

## How to Use

1. Click the live demo link in your web browser.
2. Click "Allow" when the browser asks to use your camera.
3. Hold up your hands and face to the camera to see the tracking numbers update live.
4. Use the checkboxes at the top to hide or show any data you want.

---
*Note: This project is a work-in-progress and is updated often.*
