let isBlocking = true; 

// Listen for clicks on the extension icon (or handle UI interactions)
chrome.action.onClicked.addListener(function (tab) {
  // Toggle blocking state
  isBlocking = !isBlocking;

  // Send message to content script to toggle ad blocking
  chrome.tabs.sendMessage(tab.id, isBlocking ? "block_ads" : "unblock_ads");

  chrome.storage.local.set({ "adsBlocked": isBlocking ? 0 : -1 });  // Store state in chrome storage, -1 is a flag for "paused"
});