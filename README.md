# Face & Hand Tracker

A web-based dashboard that tracks your facial features and hands in real-time using a standard webcam. Built using HTML, CSS, and vanilla JavaScript powered by MediaPipe Holistic, this tool is designed to assist in studying the micro-movements, tremors, and rigidity associated with Parkinson's disease. No specialized hardware or depth sensors are required.

## Live Demo
Try the live application directly in your browser: 

**[https://christopherjun979-source.github.io/FaceAndHandTracker/
]([url](https://christopherjun979-source.github.io/FaceAndHandTracker/))**

## Dashboard Features

* **Balanced Center-Video Layout:** The video feed is locked to a non-distorted, standard 16:9 aspect ratio and centered on the screen. The feed is mirrored horizontally to feel natural to the user.
* **Gear Configuration Menu ⚙️:** Located in the top-right corner of the interface, clicking the gray gear icon toggles a floating, draggable Modules Selection panel. This panel allows you to selectively toggle data tracking loops on or off to optimize performance and screen space.
* **Dual-Hand Tracking (Stream Panels A & B):** Pinpoints and separates data for both hands simultaneously across 21 unique skeletal landmarks. To ensure instant data tracking readability, each finger cluster is color-coded:
  * **Wrist Base:** red
  * **Thumb:** orange
  * **Index Finger:** yellow
  * **Middle Finger:** green
  * **Ring Finger:** blue
  * **Pinky Finger:** purple
* **Wide Facial Coordinates Panel:** Positioned in a wide horizontal block directly beneath the video layout to prevent screen scrolling. It monitors critical tremor indicator zones:
  * **Left Eye:** cyan
  * **Right Eye:** purple
  * **Lips:** red
* **Performance Optimization:** Features a lightweight processing loop designed to maintain high frame rates even when handling dual hands. A live **FPS Counter** is overlaid directly onto the video feed to monitor real-time tracking efficiency.
* **Normalized Data Output:** Coordinates are rendered as precise relative percentages of the viewport canvas size rather than localized physical units, allowing for uniform data exporting.

## How to Use

1. Launch the application via the Live Demo link.
2. Grant camera permissions when prompted by your web browser.
3. Align your face and hands within the bounds of the central video container.
4. Click the Grey Gear Icon ⚙️ in the top right to open or hide the modules selection panel and customize which data sets are actively rendered.

*Note: This project is a work-in-progress and is actively updated.*
