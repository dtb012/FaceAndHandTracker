# Hand Tracker

A real-time 3D hand tracking website built with HTML, CSS, and JS using MediaPipe to study Parkinson's disease movements. The system tracks 21 points per hand with color-coded fingers. It uses persistent data panels, while featuring a live FPS counter with no extra hardware needed.

## Features

* **Anatomical Tracking:** Measures X, Y, and Z spatial coordinates for 21 separate landmarks on each hand.
* **Color-Coded Segments:** Separates the wrist base and individual finger groups visually using distinct colors to match the data display with the camera mesh.
* **Persistent Tracking Memory:** Stabilizes data mapping by anchoring a hand to its panel even if it moves across the center line.
* **Performance Overlay:** Displays a live frames-per-second (FPS) counter to monitor video feed smoothness.

## How to Use
1. Open the live link: (https://christopherjun979-source.github.io/ParkinsonHandTrack/) in any standard web browser.
3. Grant camera permissions when prompted by the application.
4. Place one or both hands into the frame to view the live tracking data.
