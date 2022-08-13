// Find the "Hide Ads" buttons and click'em all!
const clickHideAds = () => {
    let ads = document.evaluate('//span[text()="Hide Ads"]', document, null, XPathResult.ANY_TYPE, null);
    let node = null;
    let counter = 0;
    while (node = ads.iterateNext()) {
        counter = counter + 1;
        node.click();
    }
    // If we found ads, start over the scrolling by calling
    // the start action in the background worker
    if (counter > 0) {
        chrome.runtime.sendMessage('start-fb');
    } else {
        chrome.runtime.sendMessage('end-fb');
    }
}

// Needed a timeout somehow or the code wouldn't execute
setTimeout(() => {
    clickHideAds();
}, 500);