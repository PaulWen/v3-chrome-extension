let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.info('Default background color set to %cgreen', `color: ${color}`);
});
