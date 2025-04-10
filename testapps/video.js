// video functionality module
const video = () => {
document.querySelectorAll(".project-item").forEach(item => {
  let video = document.querySelector(".video-preview"); // Single video element

  item.addEventListener("mouseenter", (event) => {
    let videoSrc = item.getAttribute("data-video");

    if (!videoSrc) return; // If no video is attached, do nothing

    if (video.src !== videoSrc) {
      video.src = videoSrc;
      video.load();
    }

    video.style.display = "block";
    video.play();

    // Position the video next to the hovered item
    let rect = event.target.getBoundingClientRect();
    video.style.position = "absolute";
    video.style.top = `${rect.top + window.scrollY}px`;
    video.style.left = `${rect.right + 10}px`;
  });

  item.addEventListener("mouseleave", () => {
    video.style.display = "none";
    video.pause();
    video.currentTime = 0;
  });
});
};