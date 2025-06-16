document.addEventListener('DOMContentLoaded', (event) => {
const modal = document.getElementById("videoModal");
const closeButton = document.querySelector(".close-button");
const video = document.getElementById("introVideo");

// Check if the user has visited before using localStorage
if (!localStorage.getItem('hasVisited')) {
  modal.style.display = "block"; // Show the modal
  video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  localStorage.setItem('hasVisited', 'true');
  setTimeout(() => {
    document.getElementById("introVideo").style.pointerEvents = "auto";
  }, 500); // Delay to allow the user to click "X" if needed
}

// When the user clicks on <span> (x), close the modal
closeButton.onclick = function() {
  modal.style.display = "none";
  video.style.pointerEvents = "none"; // Reset pointer state
  video.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
}

// When the user clicks anywhere outside of the modal content, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    video.pause(); // Pause the video when closed
  }
}
const title = document.getElementById("titol");
title.addEventListener("click", (event) => {
    event.preventDefault(); // Stop link from navigating

    modal.style.display = "block";

    // Ensure iframe is interactive after opening
    setTimeout(() => {
        video.style.pointerEvents = "auto";
    }, 500);
});
});
