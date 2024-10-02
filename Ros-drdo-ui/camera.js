// Replace with your actual ROS bridge server IP
const ROSBRIDGE_SERVER_IP = '127.0.0.1'; // Change this to your ROS bridge server IP
const cameraFeedUrl = `http://${ROSBRIDGE_SERVER_IP}:8080/stream?topic=/image_raw`;

// Function to set up the camera feed
function setupCameraFeed() {
    const cameraFeedElement = document.getElementById('camera-feed');
    
    // Set the source of the image to the camera feed URL
    cameraFeedElement.src = cameraFeedUrl;

    // Optional: Handle error if the feed fails to load
    cameraFeedElement.onerror = () => {
        cameraFeedElement.alt = "Failed to load camera feed.";
        cameraFeedElement.src = ''; // Optionally clear the src
    };
}

// Call the function to set up the camera feed on page load
document.addEventListener('DOMContentLoaded', setupCameraFeed);
