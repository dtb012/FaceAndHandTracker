const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

const wss = new WebSocket.Server({ port: 8080 });

const dataDir = path.join(__dirname, 'clinical_session_data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

const cameraStream = fs.createWriteStream(path.join(dataDir, 'camera_landmarks.csv'));
const imuStream = fs.createWriteStream(path.join(dataDir, 'imu_readings.csv'));

cameraStream.write("timestamp,source_panel,landmark_id,x,y,z\n");
imuStream.write("timestamp,accel_x,accel_y,accel_z,gyro_x,gyro_y,gyro_z\n");

console.log("Clinical Data Aggregator running on ws://localhost:8080");

wss.on('connection', (ws) => {
    console.log("Device/Client connected to data pipeline.");

    ws.on('message', (message) => {
        try {
            const packet = JSON.parse(message);
            const sysTimestamp = performance.now();

            if (packet.type === 'CAMERA_FRAME') {
                packet.landmarks.forEach(pt => {
                    cameraStream.write(`${sysTimestamp},${packet.panel},${pt.id},${pt.x.toFixed(4)},${pt.y.toFixed(4)},${pt.z.toFixed(4)}\n`);
                });
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
