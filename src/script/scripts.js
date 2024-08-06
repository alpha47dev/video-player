function loadVideo() {
    const fileInput = document.getElementById('fileInput');
    const urlInput = document.getElementById('urlInput');
    const videoPlayer = document.getElementById('videoPlayer');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const fileURL = URL.createObjectURL(file);
        setVideoSource(fileURL);
        videoPlayer.load();
        videoPlayer.play();
        handleFile(file);
    } else if (urlInput.value.trim() !== "") {
        const url = urlHandler(urlInput.value.trim());
        setVideoSource(url);
        videoPlayer.load();
        videoPlayer.play();
        handleUrl(url);
    } else {
        alert("Please select a file or enter a URL.");
    }
}

function setVideoSource(src) {
    const mp4Source = document.getElementById('mp4Source');
    const webmSource = document.getElementById('webmSource');
    const mkvSource = document.getElementById('mkvSource');

    mp4Source.src = src + ".mp4";
    webmSource.src = src + ".webm";
    mkvSource.src = src + ".mkv";
}
