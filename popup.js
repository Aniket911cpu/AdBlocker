// Popup script to display information and control the extension

// Get current tab information
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let currentTab = tabs[0];
    let currentUrl = new URL(currentTab.url);
    let hostname = currentUrl.hostname;
    
    document.getElementById("current-site").innerText = hostname;
  });
  
// Update the UI with the number of ads blocked
chrome.storage.local.get("adsBlocked", function (result) {
  let adsBlocked = result.adsBlocked || 0;
  document.getElementById("ads-blocked").innerText = `Ads Blocked: ${adsBlocked}`;
});

// Toggle blocking state when the button is clicked
document.getElementById("toggle-button").addEventListener("click", function () {
  chrome.runtime.sendMessage("toggle_blocking");
  let button = document.getElementById("toggle-button");
  if (button.innerText === "Pause") {
      button.innerText = "Resume";
  } else {
      button.innerText = "Pause";
  }
});
  