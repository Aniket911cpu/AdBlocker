// List of selectors for ads
const adSelectors = [
  ".ad",
  ".advertisement",
  ".ad-banner",
  // Add more selectors as needed for different websites
];

// Function to block ads based on the selectors
function blockAds() {
  let adsBlocked = 0;
  adSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(ad => {
          ad.remove();
          adsBlocked++;  // Count how many ads were removed
      });
  });

  // Store the number of ads blocked in chrome.storage.local
  chrome.storage.local.get("adsBlocked", function (result) {
      let currentCount = result.adsBlocked || 0;
      chrome.storage.local.set({ "adsBlocked": currentCount + adsBlocked });
  });
}

// Listen for messages from the background script to block or unblock ads
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message === "block_ads") {
      blockAds();  // Call the function to block ads
  }
  if (message === "unblock_ads") {
      // Handle unblocking ads if needed (could be an undo action)
      console.log("Ads are unblocked.");
  }
});