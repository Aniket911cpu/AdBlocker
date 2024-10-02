// Content script to block ads

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message === "block_ads") {
      // Block ads here
      // Example: document.querySelectorAll('.ad').forEach(ad => ad.remove());
    }
    // Content script to block ads efficiently

// Use efficient selectors to target ads on websites
const adSelectors = [
    ".ad",
    ".advertisement",
    ".ad-banner",
    // Add more selectors as needed
  ];
  
  // Block ads based on selectors
  function blockAds() {
    adSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(ad => ad.remove());
    });
  }
  
  // Listen for messages from the background script
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message === "block_ads") {
      blockAds();
    }
  });
  
  });
  /*This is a basic setup. You'd need to fill in the actual ad blocking logic in content.js based on how 
    you want to block ads. Also, the code to count and update the number of ads blocked would need to be implemented. 
    The icons and logo referenced in the manifest file (icon16.png, icon48.png, icon128.png, and logo.png) should be present in the extension directory.
     Additionally,consider implementing more robust error handling and refining the functionality to suit your needs.*/