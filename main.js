let sigmaHeader = document.getElementById("sigmaHeader");
let clicks = 0;

function clickFunction(){
  console.log("clicker sigma game");
  clicks++;
  sigmaHeader.innerHTML = "SIGMA CLICKS:"+clicks
}
