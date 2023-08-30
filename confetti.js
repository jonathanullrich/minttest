// confetti.js
const confettiButton = document.getElementById("confettiButton");

confettiButton.addEventListener("click", () => {
    // Create a new confetti object
    const confetti = new ConfettiGenerator({
        target: "confettiContainer", // The ID of the container where confetti will be generated
        max: 80, // Max number of confetti particles
        colors: [
            "#ff0000", // Red
            "#00ff00", // Green
            "#0000ff", // Blue
            "#ff00ff", // Magenta
            "#ffff00", // Yellow
            "#00ffff", // Cyan
            "#ff9900", // Orange
            "#9900ff", // Purple
            "#00ff99", // Teal
            "#ff0099", // Pink
        ], // Array of confetti colors
        size: 1, // Size of confetti particles
        animate: true,
    });

    // Start the confetti animation
    confetti.render();

    // Remove confetti after 5 seconds (adjust the time as desired)
    setTimeout(() => {
        confetti.clear();
    }, 5000);
});
