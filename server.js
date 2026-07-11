const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

const wss = new WebSocket.Server({ port: 8080 });

const dataDir = path.join(__dirname, 'clinical_session_data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

const cameraStream = fs.createWriteStream(path.join(dataDir, 'camera_landmarks.csv'));
const imuStream = fs.createWriteStream(path.join(dataDir, 'imu_readings.csv'));

// Completely explicit headers: Anyone opening the Excel file will instantly understand it
cameraStream.write("timestamp," +
    "right_eye_upper_x,right_eye_upper_y,right_eye_upper_z," +
    "right_eye_lower_x,right_eye_lower_y,right_eye_lower_z," +
    "left_eye_upper_x,left_eye_upper_y,left_eye_upper_z," +
    "left_eye_lower_x,left_eye_lower_y,left_eye_lower_z," +
    "mouth_top_lip_x,mouth_top_lip_y,mouth_top_lip_z," +
    "mouth_bottom_lip_x,mouth_bottom_lip_y,mouth_bottom_lip_z," +
    "mouth_left_corner_x,mouth_left_corner_y,mouth_left_corner_z," +
    "mouth_right_corner_x,mouth_right_corner_y,mouth_right_corner_z\n"
);
imuStream.write("timestamp,accel_x,accel_y,accel_z,gyro_x,gyro_y,gyro_z\n");

console.log("Clinical Data Aggregator running on ws://localhost:8080");

wss.on('connection', (ws) => {
    console.log("Device/Client connected to data pipeline.");

    ws.on('message', (message) => {
        try {
            const packet = JSON.parse(message);
            const sysTimestamp = performance.now();

            if (packet.type === 'CAMERA_FRAME') {
                const features = {
                    'face_159': {x:0, y:0, z:0}, // right_eye_upper
                    'face_145': {x:0, y:0, z:0}, // right_eye_lower
                    'face_386': {x:0, y:0, z:0}, // left_eye_upper
                    'face_374': {x:0, y:0, z:0}, // left_eye_lower
                    'face_0':   {x:0, y:0, z:0}, // mouth_top_lip
                    'face_17':  {x:0, y:0, z:0}, // mouth_bottom_lip
                    'face_61':  {x:0, y:0, z:0}, // mouth_left_corner
                    'face_291': {x:0, y:0, z:0}  // mouth_right_corner
                };

                packet.landmarks.forEach(pt => {
                    if (features[pt.id]) {
                        features[pt.id] = { x: pt.x, y: pt.y, z: pt.z };
                    }
                });

                cameraStream.write(`${sysTimestamp},` +
                    `${features['face_159'].x.toFixed(4)},${features['face_159'].y.toFixed(4)},${features['face_159'].z.toFixed(4)},` +
                    `${features['face_145'].x.toFixed(4)},${features['face_145'].y.toFixed(4)},${features['face_145'].z.toFixed(4)},` +
                    `${features['face_386'].x.toFixed(4)},${features['face_386'].y.toFixed(4)},${features['face_386'].z.toFixed(4)},` +
                    `${features['face_374'].x.toFixed(4)},${features['face_374'].y.toFixed(4)},${features['face_374'].z.toFixed(4)},` +
                    `${features['face_0'].x.toFixed(4)},${features['face_0'].y.toFixed(4)},${features['face_0'].z.toFixed(4)},` +
                    `${features['face_17'].x.toFixed(4)},${features['face_17'].y.toFixed(4)},${features['face_17'].z.toFixed(4)},` +
                    `${features['face_61'].x.toFixed(4)},${features['face_61'].y.toFixed(4)},${features['face_61'].z.toFixed(4)},` +
                    `${features['face_291'].x.toFixed(4)},${features['face_291'].y.toFixed(4)},${features['face_291'].z.toFixed(4)}\n`
                );
            } 
            else if (packet.type === 'IMU_DATA') {
                const d = packet.data;
                imuStream.write(`${sysTimestamp},${d.ax},${d.ay},${d.az},${d.gx},${d.gy},${d.gz}\n`);
            }
        } catch (err) {
            console.error(" Error parsing packet:", err);
        }
    });

    ws.on('close', () => console.log(" Pipeline disconnected. Streams preserved safety."));
});
