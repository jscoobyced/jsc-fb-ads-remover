// References for the FB feed and FB ads tab ids
let fbTabId = null;
let adsTabId = null;

// Listener to create FB feed or FB ads page load
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === 'start-fb') {
        chrome.tabs.create({ url: "https://www.facebook.com" }, tab => {
            fbTabId = tab.id
        })
    } else if (message === 'open-ads') {
        chrome.tabs.create({ url: "https://www.facebook.com/adpreferences/?entry_product=account_settings_menu" }, tab => {
            adsTabId = tab.id;
        })
    } else if (message === 'end-fb') {
        if (adsTabId) chrome.tabs.remove(adsTabId);
    }
});

// Listener for tabs loaded and execute actions
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // FB feed --> execute the 'loadfb.js' script
    if (tabId == fbTabId && changeInfo.status == 'complete') {
        if (adsTabId) chrome.tabs.remove(adsTabId);
        chrome.scripting.executeScript({
            target: { tabId },
            files: ["assets/scripts/loadfb.js"]
        });
        // FB ads setting page --> execute the 'fbsettings.js' script
    } else if (tabId == adsTabId && changeInfo.status == 'complete') {
        if (fbTabId) chrome.tabs.remove(fbTabId);
        chrome.scripting.executeScript({
            target: { tabId },
            files: ["assets/scripts/fbsettings.js"]
        });
    }

})