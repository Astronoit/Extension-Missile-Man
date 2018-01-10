// var app = chrome.runtime.getBackgroundPage();

function hello() {
  chrome.tabs.executeScript({
    file: 'index.html'
  }); 
}

document.getElementById('clickme').addEventListener('click', hello);
