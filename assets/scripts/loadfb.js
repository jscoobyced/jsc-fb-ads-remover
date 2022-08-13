// Scroll down the FB feed page 20 times to loads many ads
const scrollPageAndLoadAds = () => {
    let counter = 0;
    const scrollId = setInterval(() => {
        window.scrollBy(0, 1000);
        counter = counter + 1;
        // After 20 scroll down, call the FB ads settings page action
        // in the background worker
        if (counter >= 20) {
            clearInterval(scrollId);
            chrome.runtime.sendMessage('open-ads');
        }
    }, 500);
}

scrollPageAndLoadAds();