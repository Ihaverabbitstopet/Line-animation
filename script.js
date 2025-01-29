document.addEventListener("DOMContentLoaded", () => {
    const paths = document.querySelectorAll(".moving-segment");

    paths.forEach((path, index) => {
        const length = path.getTotalLength(); // Get path length dynamically
        const segmentSize = 50; // Fixed visible portion
        const hiddenSize = length - segmentSize; // Rest of the path remains hidden

        // Apply stroke properties
        path.style.strokeDasharray = `${segmentSize} ${hiddenSize}`; 
        path.style.strokeDashoffset = length; // Start fully hidden

        // Start animation with delay for each path
        setTimeout(() => {
            path.style.transition = `stroke-dashoffset 5s linear infinite`; // Smooth looping animation
            path.style.strokeDashoffset = "0"; // Move the segment along the path
        }, index * 500); // Staggered start times
    });
});
