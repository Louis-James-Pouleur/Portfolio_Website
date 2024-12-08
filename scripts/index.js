// Select all video elements and their corresponding hover-text elements
const videos = document.querySelectorAll(".videoContainer video");
const hoverTexts = document.querySelectorAll(".videoContainer .hover-text");

// Set the initial volume for all videos
videos.forEach((video) => {
	video.volume = 0.5; // Set volume to 50% for all videos
});

// Add event listeners for each video
videos.forEach((video, index) => {
	const hoverText = hoverTexts[index]; // Get corresponding hover text for the video

	video.addEventListener("mouseenter", () => {
		video.play();
		hoverText.classList.remove("active"); // Hide hover text when video plays
	});

	video.addEventListener("mouseleave", () => {
		video.pause();
		hoverText.classList.add("active"); // Show hover text when video pauses
	});
});
