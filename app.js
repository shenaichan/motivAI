function displayName() {
    var originalName = document.getElementById("txtInputData").value;
    document.getElementById("motivate").innerHTML = "Your Name is :" + originalName;
  } 

document.getElementById("btn").addEventListener("click", displayName);
