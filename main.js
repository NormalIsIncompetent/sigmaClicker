let sigmaHeader = document.getElementById("sigmaHeader");
let clicks = 0;

function clickFunction(clicks){
  console.log("clicker sigma game");
  clicks++;
  sigmaHeader.innerHTML = "SIGMA CLICKS:"+clicks
}
