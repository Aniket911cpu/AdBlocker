// Background script to manage extension functionality

let isBlocking = true; // Initially, ads are blocked

// Listen for clicks on the browser action
chrome.action.onClicked.addListener(function (tab) {
  // Toggle blocking state
  isBlocking = !isBlocking;
  
  // Send message to content script to toggle ad blocking
  chrome.tabs.sendMessage(tab.id, isBlocking ? "block_ads" : "unblock_ads");
});
