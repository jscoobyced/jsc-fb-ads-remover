# JSC Facebook Ad Remover
A Chrome extension to hide Ads in Facebook

Simply click the `Start` button on the extension and it will do it's job:

This extension will simply act as if you were browsing FB. First, it opens a new tab and loads FB. You will need to be already signed-in.
Then, it will scroll down for a while to loads many ads or sponsored content. Afterwards, it will open the settings page where you can usually click "Hide Ads". But it will do it for you automatically.
Then it starts over to scroll in your FB feed and hide ads, until there is no more. Then it closes itself and you're good to go... for a while cause FB keeps adding them :P

Note this is the first release, it works well, however has these limitations:
- it keeps the browser focus, so you cannot use your browser while the extension is operating. The reason is it will allow you to see what happens. This will be changed in next release where the focus will not be kept on the tabs used by the extension.
- it has simple logic: loads feed, hides visible ads and start over. Next release will hide all ads (by clicking "View More".