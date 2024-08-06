function loadVideo() {
    const fileInput = document.getElementById('fileInput');
    const urlInput = document.getElementById('urlInput');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        videoSource.src = URL.createObjectURL(file);
        videoPlayer.load();
        videoPlayer.play();
    } else if (urlInput.value.trim() !== "") {
        videoSource.src = urlInput.value.trim();
        videoPlayer.load();
        videoPlayer.play();
    } else {
        alert("Please select a file or enter a URL.");
    }
}
