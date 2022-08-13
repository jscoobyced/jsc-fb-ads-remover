let startButton = document.getElementById('start-button');

// Start the process by calling for action in 
// the background worker
startButton.addEventListener("click", () => {
    chrome.runtime.sendMessage('start-fb');
});