# Hand Tracker

A real-time 3D hand tracking website built with HTML, CSS, and JS using MediaPipe to study Parkinson's disease movements. The system tracks 21 points per hand with color-coded fingers. It uses persistent data panels, while featuring a live FPS counter with no extra hardware needed.

## Features

* **Anatomical Tracking:** Measures X, Y, and Z spatial coordinates for 21 separate joint/landmarks on each hand.
* **Color-coded:** Separates the:
  * wrist base (red)
  * pinky (purple)
  * thumb (orange)
  * index (yellow)
  * middle (green)
  * ring (blue)
* fingers individually, whilst visually using distinct colors to match the data display with the camera mesh.
* **Performance Overlay:** Displays a live frames-per-second (FPS) counter to monitor video feed.

## How to Use
1. Open the live link: (https://christopherjun979-source.github.io/ParkinsonHandTrack/) in any standard web browser.
3. Grant camera permissions when prompted by the application.
4. Place one or both hands into the frame to view the live tracking data.
