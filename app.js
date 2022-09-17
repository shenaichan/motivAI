function updateMainText(value) {
    document.getElementById("motivate").innerHTML = value;

} 
function updateGoal() {

    value = document.getElementById('txtInputData').value

    chrome.storage.local.set({'Goals': value}, function() {
        console.log('Settings saved');
      });
  
      server_handshake()

}

function sendGoalsToSocket(socket) {
    chrome.storage.local.get(['Goals'], function(items) {
        goals = items['Goals'];
        socket.send(goals);
    });
}

function server_handshake(){
    var webSocket = new WebSocket('ws://localhost:8765');

    webSocket.onopen = (event) => {
        sendGoalsToSocket(webSocket);
    };
    webSocket.onmessage = (event) => {
        updateMainText(event.data);
    }
}

const button = document.getElementById("btn");

button.addEventListener('click', updateGoal);

server_handshake()