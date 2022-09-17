function displayName() {
    var originalName = document.getElementById("txtInputData").value;
    x = Math.random();
    document.getElementById("motivate").innerHTML = "Your Name is :" + x;

    chrome.storage.local.get(['goals'], function(result) {
        console.log('Value currently is ' + result.value);
    });
} 
function setGoals(value) {



    chrome.storage.local.set({'foo': 'hello', 'bar': 'hi'}, function() {
        console.log('Settings saved');
      });
  
      // Read it using the storage API
    chrome.storage.local.get(['foo', 'bar'], function(items) {
        console.log(items)
        message('Settings retrieved', items);
        
      });
      

}

const button = document.getElementById("btn")

button.addEventListener('click', displayName);

const webSocket = new WebSocket('ws://localhost:8765');

setGoals('heyyy')

// webSocket.onopen = (event) => {
//     webSocket.send("I want to become a fish!");
// };
// webSocket.onmessage = (event) => {
//     console.log(event.data);
// }